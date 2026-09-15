from PIL import Image
import pillow_avif
import os, shutil

folder = input("Enter path of folder:\n")

images = os.listdir(folder)
old_images = []

for i in images:
    if i.split(".")[-1] == "png":
        continue
    path = f"{folder}/{i}"
    print(f"Converting {i} to PNG at {path}")
    image = Image.open(path)
    
    outputpath = f"{folder}/{".".join(i.split(".")[:-1])}.png"
    image.save(outputpath)
    shutil.move(path, f"imageresizer/trashimages/{i}")
    old_images.append(f"imageresizer/trashimages/{i}")

print(f"Please check {folder} too make sure that all images are correctly converted.")
if input("would you like to delete the old image files? (type confirm) ") == "confirm":
    for i in old_images:
        print(f"Deleting {i}")
        os.remove(i)