from PIL import Image

# Open your image
img = Image.open("logo.png").convert("RGBA")
datas = img.getdata()

new_data = []
for item in datas:
    # If the pixel is dark/black, make it transparent
    if item[0] < 30 and item[1] < 30 and item[2] < 30:
        new_data.append((255, 255, 255, 0))  # Transparent
    else:
        new_data.append(item)

img.putdata(new_data)
img.save("logo.png", "PNG")
print("Background removed successfully!")