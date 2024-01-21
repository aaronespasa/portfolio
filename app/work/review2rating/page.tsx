import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import review2ratingImg from "@/public/project/cover/review2rating.png";

export default function Review2Rating() {
    return (
        <ProjectTemplate
            slug="review2rating"
            intro="This project presents a sophisticated classification model designed to predict the rating of a hotel review based on its text. It also incorporates topic modeling to extract the main themes from the reviews, aligning closely with the needs and interests of the hospitality industry."
            image={review2ratingImg}
        >
            <Callout tag="What's it?" type="dark">
                Review2Rating is an innovative project that leverages machine learning to analyze hotel reviews. The goal is to automatically predict the rating of a review through text analysis and identify key topics, providing valuable insights for hotel management and customer service improvement.
            </Callout>
        </ProjectTemplate>
    );
}
