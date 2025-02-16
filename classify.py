from wildlife_datasets.datasets.macaque_faces import MacaqueFaces
from wildlife_tools.data.dataset import WildlifeDataset

import torchvision.transforms as T
import timm
from wildlife_tools.features.deep import DeepFeatures
from wildlife_tools.similarity.cosine import CosineSimilarity
from wildlife_tools.evaluation.classifier import KnnClassifier
import numpy as np

metadata = MacaqueFaces('datasets/MacaqueFaces')
transform = T.Compose([T.Resize([224, 224]), T.ToTensor(), T.Normalize(mean=(0.485, 0.456, 0.406), std=(0.229, 0.224, 0.225))])
dataset = WildlifeDataset(metadata.df, metadata.root, transform=transform)

# optional
dataset_database = WildlifeDataset(metadata.df.iloc[100:,:], metadata.root, transform=transform)
dataset_query = WildlifeDataset(metadata.df.iloc[:100,:], metadata.root, transform=transform)

name = 'hf-hub:BVRA/MegaDescriptor-T-224'
extractor = DeepFeatures(timm.create_model(name, num_classes=0, pretrained=True))
query, database = extractor(dataset_query), extractor(dataset_database)

similarity_function = CosineSimilarity()
similarity = similarity_function(query, database)

classifier = KnnClassifier(k=1, database_labels=dataset_database.labels_string)
predictions = classifier(similarity['cosine'])
for i, pred in enumerate(predictions):
    print(f"Query Image {i+1}: Predicted Species = {pred}")
accuracy = np.mean(dataset_database.labels_string == predictions)
print(f"Classification Accuracy: {accuracy * 100:.2f}%")


