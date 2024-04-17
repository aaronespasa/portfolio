import ProjectTemplate, { Callout } from "@/components/projectTemplate";
import paintwallImg from "@/public/project/blog-cover/paintwall.webp";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import livingRoomPink from "@/public/work/paintwall/living-room-pink.jpg";
import livingRoomBrown from "@/public/work/paintwall/living-room-brown.jpg";
import livingRoomGray from "@/public/work/paintwall/living-room-gray.jpg";
import livingRoomPink2 from "@/public/work/paintwall/living-room-2-pink.jpg";
import livingRoomBrown2 from "@/public/work/paintwall/living-room-2-brown.jpg";
import livingRoomGray2 from "@/public/work/paintwall/living-room-2-gray.jpg";

export default function PaintWall() {
    const project = projectsData.find(project => project.slug === "paintwall")
    return (
        <ProjectTemplate
            slug="paintwall"
            intro="PaintWall is a mobile app that allows you to visualize how a wall would look like with a certain color in order to make a decision on painting it."
            image={paintwallImg}
        >
            <div className="w-full flex items-center flex-col sm:flex-row mb-10 gap-x-4">
                <Image src={project?.imageUrl} alt="PaintWall app icon" width={512} height={512} quality={100} className="w-28 h-28 rounded-3xl shadow-2xl" />
                <div className="py-2 px-4 rounded-2xl border-dashed border border-indigo-600 bg-indigo-50 text-[0.99rem] mt-8 sm:mt-0">
                    PaintWall's model sets a new standard, <span className="font-medium">outperforming the previous best model by 0.5 mIoU</span>.<br/><br/>The mobile app is under development.
                </div>
            </div>
            <Callout tag="How it's made?" type="dark">
                The AI model behind PaintWall is a binary semantic segmentation model that differentiates between the wall and the rest of the image. The model is trained on a dataset with a great variety of scenarios to make it robust and reliable. <br/><br/>Once the model was trained, it was deployed on the edge using quantization to make it run on mobile devices.
            </Callout>
            <p className="mb-4">Here are some examples of the model prediction along with the colorized version of the original image using the wall mask:</p>
            <div className="grid grid-cols-1 gap-y-8 mb-4">
                <Image src={livingRoomPink} alt="Living room with pink wall" className="w-full h-full" />
                <Image src={livingRoomBrown} alt="Living room with brown wall" className="w-full h-full" />
                <Image src={livingRoomGray} alt="Living room with gray wall" className="w-full h-full" />
            </div>
            <p className="mb-4">And here are more examples:</p>
            <div className="grid grid-cols-1 gap-y-8 mb-4">
                <Image src={livingRoomPink2} alt="Living room with pink wall" className="w-full h-full" />
                <Image src={livingRoomBrown2} alt="Living room with brown wall" className="w-full h-full" />
                <Image src={livingRoomGray2} alt="Living room with gray wall" className="w-full h-full" />
            </div>
        </ProjectTemplate>
    );
}