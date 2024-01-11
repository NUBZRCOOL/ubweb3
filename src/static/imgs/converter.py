from PIL import Image
import threading
import os

'''
Adam, this code just converts the .jfif files into .png files
(Yes, I did waste a bunch of time doing something that would have taken a shorter amount of time)
'''

os.chdir(os.path.dirname(__file__) + "\\")


def task(filePath):

    img = Image.open(filePath)
    img.save(f"{str(img.filename).strip('.jfif')}.png")


for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".jfif"):
            thread = threading.Thread(target=task, args=(file,))
            thread.start()