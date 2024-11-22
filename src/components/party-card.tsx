import { FaHeart } from "react-icons/fa";

interface PartyCardProps {
    date: string;
    title: string;
    description: string;
    img: { img: string, type: string };
    alt: string;
    nb?: number;
    nbMax?: number;
}

const PartyCard: React.FC<PartyCardProps> = ({ date, title, description, img, alt, nb, nbMax }) => {
    return (
        <div
            className="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
            <div className="bg-gray-50 h-[225px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img src={img.img} alt={alt}
                    className="h-full w-full object-cover bg-center bg-no-repeat" />
            </div>
            <div className="p-6">
                <time>{date}</time>
                <h3 className="text-lg font-bold text-gray-800 mt-1">{title}</h3>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{description}</p>
                <div className="flex items-center justify-between mt-6">
                    <div
                        className="w-10 h-10  bg-gray-100 flex items-center justify-center rounded-full">
                        <FaHeart />
                    </div>
                    <h4 className="text-lg text-gray-800 font-bold">{nb}<sub>/{nbMax}</sub></h4>
                </div>
            </div>
        </div>
    );
};

export default PartyCard;