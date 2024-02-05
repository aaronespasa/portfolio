import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import hospitalDatabaseImg from "@/public/project/cover/hospital-database.jpg";

export default function HospitalDatabase() {
    return (
        <ProjectTemplate
            slug="hospital-database"
            intro="Hospital Database is a project centered on the creation of a relational database for a hospital, implemented using PL/SQL. This project focuses on efficiently managing hospital information, from patient records to staff management and medical inventory."
            image={hospitalDatabaseImg}
        >
            <Callout tag="What's it?" type="dark">
                The Hospital Database project aims to streamline and enhance the management of hospital operations. Utilizing the power of PL/SQL for relational database management, this project is designed to handle complex data sets, ensuring accuracy and accessibility in managing crucial hospital information.
            </Callout>
        </ProjectTemplate>
    );
}
