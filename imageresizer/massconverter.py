from PIL import Image
import pillow_avif
import os

images = os.listdir("imageresizer/images")

for i in images:
    path = f"imageresizer/images/{i}"
    print(f"Converting {i} to PNG at {path}")
    image = Image.open(path)
    outputpath = f"imageresizer/imageoutput/{".".join(i.split(".")[:-1])}.png"
    image.save(outputpath)