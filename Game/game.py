# Import required libraries
import pygame
import random
import sys
import websockets
import asyncio
import json
import base64
import threading
from io import BytesIO

# Initialize Pygame
pygame.init()

# Game window settings
WINDOW_WIDTH, WINDOW_HEIGHT = 945, 600
display_surface = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))

# Set up WebSocket server
async def send_game_data(websocket, path):
    clock = pygame.time.Clock()
    
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()

        # Update the game state (e.g., move clown, update score)
        display_surface.fill((0, 0, 0))  # Placeholder for game rendering
        
        # Capture the screen as an image
        image_data = pygame.image.tostring(display_surface, "RGB")
        encoded_image = base64.b64encode(image_data).decode("utf-8")

        # Send the game image as base64 to the frontend
        await websocket.send(json.dumps({"image": encoded_image}))

        clock.tick(30)  # Adjust frame rate as needed

# Function to start the WebSocket server
async def main():
    start_server = await websockets.serve(send_game_data, "localhost", 8765)
    await start_server.wait_closed()

# Function to run the WebSocket server in a separate thread
def start_websocket_server():
    asyncio.run(main())

# Start the WebSocket server in a separate thread
ws_thread = threading.Thread(target=start_websocket_server)
ws_thread.start()

# Set up display
FPS = 60
pygame.display.set_caption("Catch the Clown")

# Set up colors
BLUE = (1, 175, 209)
YELLOW = (248, 231, 28)

# Set up fonts
font = pygame.font.Font(None, 36)
title_font = pygame.font.Font(None, 72)

# Load game assets
background_image = pygame.image.load("assets/background.png")
clown_image = pygame.image.load("assets/clown.png")
click_sound = pygame.mixer.Sound("assets/click_sound.wav")
miss_sound = pygame.mixer.Sound("assets/miss_sound.wav")
pygame.mixer.music.load("assets/ctc_background_music.wav")

# Set up game variables
lives = 5
score = 0
clown_velocity = 5
clown_acceleration = 0.5

# Set up clown starting position and movement
clown_rect = clown_image.get_rect()
clown_rect.topleft = (random.randint(0, WINDOW_WIDTH - clown_rect.width),
                      random.randint(0, WINDOW_HEIGHT - clown_rect.height))
dx = random.choice([-1, 1]) * clown_velocity
dy = random.choice([-1, 1]) * clown_velocity

# Set up clock
clock = pygame.time.Clock()

# Function to reset the game
def reset_game():
    global lives, score, clown_velocity, dx, dy, clown_rect
    lives = 5
    score = 0
    clown_velocity = 5
    clown_rect.topleft = (random.randint(0, WINDOW_WIDTH - clown_rect.width),
                          random.randint(0, WINDOW_HEIGHT - clown_rect.height))
    dx = random.choice([-1, 1]) * clown_velocity
    dy = random.choice([-1, 1]) * clown_velocity
    pygame.mixer.music.play(-1, 0.0)

# Function to display text
def display_text(text, font, color, x, y):
    text_surface = font.render(text, True, color)
    text_rect = text_surface.get_rect(center=(x, y))
    display_surface.blit(text_surface, text_rect)

# Game over screen
def game_over():
    pygame.mixer.music.stop()
    display_surface.fill(BLUE)
    display_text("Game Over", title_font, YELLOW, WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2 - 50)
    display_text(f"Final Score: {score}", font, YELLOW, WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2)
    display_text("Click to Restart", font, YELLOW, WINDOW_WIDTH // 2, WINDOW_HEIGHT // 2 + 50)
    pygame.display.update()

    # Wait for player to restart
    waiting = True
    while waiting:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            if event.type == pygame.MOUSEBUTTONDOWN:
                reset_game()
                waiting = False

# Main game loop
running = True
while running:
    # Event handling
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        if event.type == pygame.MOUSEBUTTONDOWN:
            mouse_x, mouse_y = event.pos
            if clown_rect.collidepoint(mouse_x, mouse_y):
                click_sound.play()
                score += 1
                clown_velocity += clown_acceleration
                dx = random.choice([-1, 1]) * clown_velocity
                dy = random.choice([-1, 1]) * clown_velocity
                clown_rect.topleft = (random.randint(0, WINDOW_WIDTH - clown_rect.width),
                                      random.randint(0, WINDOW_HEIGHT - clown_rect.height))
            else:
                miss_sound.play()
                lives -= 1

    # Move the clown
    clown_rect.x += dx
    clown_rect.y += dy

    # Bounce off walls
    if clown_rect.left <= 0 or clown_rect.right >= WINDOW_WIDTH:
        dx = -dx
    if clown_rect.top <= 0 or clown_rect.bottom >= WINDOW_HEIGHT:
        dy = -dy

    # Check for game over
    if lives <= 0:
        game_over()

    # Draw the game elements
    display_surface.blit(background_image, (0, 0))
    display_surface.blit(clown_image, clown_rect)

    # Display HUD
    display_text(f"Score: {score}", font, YELLOW, 100, 30)
    display_text(f"Lives: {lives}", font, YELLOW, WINDOW_WIDTH - 100, 30)
    display_text("Catch the Clown", title_font, YELLOW, WINDOW_WIDTH // 2, 30)

    # Update the display
    pygame.display.update()

    # Control frame rate
    clock.tick(FPS)

# End the game
pygame.quit()
