import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PartyCard from "./party-card";
import { useEffect, useState } from "react";
import axios from 'axios';
  
// const glasses = [
//   {
//     id: 1,
//     name: 'Golden Glass Wear',
//     price: '$10.5',
//     image: 'https://readymadeui.com/images/sunglass1.webp',
//     nb: 5,
//     nbMax: 15,
//   },
//   {
//     id: 2,
//     name: 'Blue Glass Wear',
//     price: '$9',
//     image: 'https://readymadeui.com/images/sunglass2.webp',
//     nb: 5,
//     nbMax: 15,
//   },
//   {
//     id: 3,
//     name: 'Black Glass Wear',
//     price: '$16',
//     image: 'https://readymadeui.com/images/sunglass5.webp',
//     nb: 1,
//     nbMax: 10,
//   },
//   {
//     id: 4,
//     name: 'Round Glass',
//     price: '$14',
//     image: 'https://readymadeui.com/images/sunglass3.webp',
//     nb: 15,
//     nbMax: 20,
//   },
//   {
//     id: 5,
//     name: 'White Lens Glass',
//     price: '$8',
//     image: 'https://readymadeui.com/images/sunglass7.webp',
//     nb: 15,
//     nbMax: 20,
//   },
//   {
//     id: 6,
//     name: 'Black Glass',
//     price: '$11.5',
//     image: 'https://readymadeui.com/images/sunglass6.webp',
//     nb: 59,
//     nbMax: 60,
//   },
// ];
  
const imgType = [
  {
    type: "Soirée",
    img: "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcnR5fGVufDB8fDB8fHww"
  },
  {
    type: "Conférence",
    img: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1pc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    type: "Concert",
    img: "https://plus.unsplash.com/premium_photo-1661299366011-bb9f86212bdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBhcnR5fGVufDB8fDB8fHww"
  },
  {
    type: "Atelier",
    img: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnR5fGVufDB8fDB8fHww"
  },
  {
    type: "Exposition",
    img: "https://images.unsplash.com/photo-1581245869344-f9915e401773?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
  }
];

function PartyCards() {
  const [page, setPage] = useState(0);
  const [pageMax, setPageMax] = useState(0);
  const [parties, setParties] = useState<{ id: number; name: string; nb: number; nbPlace: number; date: string; description: string; type: { id: number; label: string; description: string} }[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:8081/party?page=${page}&size=6`)
      .then((response) => {
        setPageMax(response.data.totalPages);
        setParties(response.data.content);
      });
  }, [page]);

  const NextPage = () => {
    if (page + 1 === pageMax) {
      return;
    }

    setPage(page + 1);
  }

  const PreviousPage = () => {
    if (page === 0) {
      return;
    }

    setPage(page - 1);
  }

    return (
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl md:max-w-3xl max-w-lg">
        <div className="flex items-center justify-between">

          <button onClick={() => PreviousPage()}
            className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded p-4 m-4 transition-all">
            <FaChevronLeft className="w-3 h-3 fill-current" />
          </button>
  
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 mt-4 mb-8">Les soirées 🎉</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {parties.map((party) => {
            const img = imgType.find(x => x.type === party.type.label);
            return (
              <PartyCard
                key={party.id}
                title={party.name}
                img={img}
                alt={party.name}
                nb={party.nb}
                nbMax={party.nbPlace}
                date={new Date(party.date).toLocaleDateString()}
                description={party.description}
              />
            );
          })}
            </div>
          </div>  

          <button onClick={() => NextPage()}
            className="text-black hover:text-blue-600 text-[15px] block hover:bg-blue-50 rounded p-4 m-4 transition-all">
            <FaChevronRight className="w-3 h-3 fill-current" />
          </button>

        </div>
      </div>
    );
    
}

export default PartyCards;