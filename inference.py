import timm
import torch
import torchvision.transforms as T
from PIL import Image
from urllib.request import urlopen

# Create model with built-in pretrained weights
model = timm.create_model("hf-hub:BVRA/MegaDescriptor-L-384", pretrained=True)
model.eval()

# Define image transformation
train_transforms = T.Compose([
    T.Resize(size=(384, 384)),
    T.ToTensor(), 
    T.Normalize([0.5, 0.5, 0.5], [0.5, 0.5, 0.5])
]) 

# Load an image
img = Image.open(urlopen(
    'https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/beignets-task-guide.png'
))

# Perform inference
output = model(train_transforms(img).unsqueeze(0))

# Print output to confirm inference
print(output)