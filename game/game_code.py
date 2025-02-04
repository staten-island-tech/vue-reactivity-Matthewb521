# Import required libraries
import pygame
import random
import sys

# Initialize Pygame
pygame.init()

# Set up display
WINDOW_WIDTH = 945
WINDOW_HEIGHT = 600
FPS = 60
display_surface = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
pygame.display.set_caption("Catch the Clown")

# Set up colors
BLUE = (1, 175, 209)
YELLOW = (248, 231, 28)

# Set up fonts
font = pygame.font.Font(None, 36)
title_font = pygame.font.Font(None, 72)

# Load game assets
background_image = pygame.image.load("background.png")
clown_image = pygame.image.load("clown.png")

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
                score += 1
                clown_velocity += clown_acceleration
                dx = random.choice([-1, 1]) * clown_velocity
                dy = random.choice([-1, 1]) * clown_velocity
                clown_rect.topleft = (random.randint(0, WINDOW_WIDTH - clown_rect.width),
                                      random.randint(0, WINDOW_HEIGHT - clown_rect.height))
            else:
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

#front end programming
from flask import Flask, send_file, render_template
import os

app = Flask(__name__)

# Serve the game index page (which will embed the game into the Vue app)
@app.route('/')
def index():
    return render_template('index.html')  # Make sure you have an HTML file that the Vue app can access

# Serve the game image or video frames (this depends on how you're rendering your game)
@app.route('/game')
def game():
    # Here you could return a static file (e.g., an image representing the game state)
    return send_file('path/to/game_frame.png', mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

from flask_cors import CORS

# Enable CORS for the Flask app
app = Flask(__name__)
CORS(app)
