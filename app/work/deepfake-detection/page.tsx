import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import deepfakeDetectionImg from "@/public/project/blog-cover/deepfake-detection.webp";

export default function DeepFakeDetection() {
    return (
        <ProjectTemplate
            slug="deepfake-detection"
            intro="The DeepFake Detection project introduces a robust model centered on image classification, designed to accurately identify DeepFake content. Enhanced with explainability features, this project aims to provide clarity and understanding in the detection process."
            image={deepfakeDetectionImg}
        >
            <Callout tag="What's it?" type="dark">
                DeepFake Detection is a crucial project that employs advanced machine learning techniques to detect DeepFake images. The focus is on creating a reliable, transparent image classifier that not only identifies fakes but also explains the basis of its conclusions, contributing significantly to digital media integrity.
            </Callout>
        </ProjectTemplate>
    );
}
