import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import rentmateImg from "@/public/project/cover/rentmate.png";

export default function RentMate() {
    return (
        <ProjectTemplate
            slug="rentmate"
            intro="RentMate is an advanced project featuring a regression model based on a multimodal transformer, equipped with explainability features. This project focuses on predicting rental house prices within the Community of Madrid, offering valuable insights for both renters and property owners."
            image={rentmateImg}
        >
            <Callout tag="What's it?" type="dark">
                The RentMate project aims to utilize cutting-edge machine learning techniques to forecast housing rental prices. It emphasizes the use of transformer-based models to provide accurate, understandable predictions, enhancing decision-making for individuals in the Madrid real estate market.
            </Callout>
        </ProjectTemplate>
    );
}
