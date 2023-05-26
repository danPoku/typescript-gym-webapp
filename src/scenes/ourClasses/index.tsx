import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Looking to build muscle and get stronger? Our weight training classes are the perfect way to achieve your fitness goals. Led by experienced instructors, our classes focus on proper form and technique to ensure you get the most out of your workout. Join our community today and start your journey towards a stronger, healthier you!",
        image: image1,
    },
    {
        name: "Fitness Classes",
        image: image2
    },
    {
        name: "Adventure Classes",
        description: "Looking to build muscle and get stronger? Our weight training classes are the perfect way to achieve your fitness goals. Led by experienced instructors, our classes focus on proper form and technique to ensure you get the most out of your workout. Join our community today and start your journey towards a stronger, healthier you!",
        image: image3,
    },
    {
        name: "Ab Core Classes",
        image: image4
    },
    {
        name: "Yoga Classes",
        description: "Looking to build muscle and get stronger? Our weight training classes are the perfect way to achieve your fitness goals. Led by experienced instructors, our classes focus on proper form and technique to ensure you get the most out of your workout. Join our community today and start your journey towards a stronger, healthier you!",
        image: image5,
    },
    {
        name: "Weight Training Classes",
        description: "Looking to build muscle and get stronger? Our weight training classes are the perfect way to achieve your fitness goals. Led by experienced instructors, our classes focus on proper form and technique to ensure you get the most out of your workout. Join our community today and start your journey towards a stronger, healthier you!",
        image: image6,
    }
]


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ourClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">
                        Looking for a fun and effective way to get fit? Look no further than our classes at Gym! 
                        With a variety of classes to choose from, including yoga, spin, and HIIT, there's something for everyone. 
                        Our experienced instructors will guide you through each class, 
                        helping you to achieve your fitness goals and feel your best. 
                        Join our community today and start your fitness journey with us!
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default ourClasses