import React from 'react'

const BOD = () => {
    const directors = [
        {
            name: "Mr. Vijay Kumar Arora",
            title: "Chairman and Managing Director",
            description: "Mr. Vijay Kumar Arora brings over four decades of leadership experience, having guided LT Foods since 1978. His strategic vision has been instrumental in shaping the Company’s trajectory and driving long-term growth.",
            img: "/BOD/Vijay.png"
        },
        {
            name: "Mr. Ashwani Kumar Arora",
            title: "Managing Director and Chief Executive Officer",
            description: "With over 37 years at LT Foods, Mr. Ashwani Kumar Arora leads the Company’s global expansion. His expertise spans strategy, operations, finance and marketing, with a focus on growth, margin enhancement and building a future-ready consumer business.",
            img: "/BOD/Ashwani.png"
        },
        {
            name: "Mr. Surinder Kumar Arora",
            title: "Managing Director",
            description: "Mr. Surinder Kumar Arora has over 30 years of experience in driving manufacturing excellence. He plays a pivotal role in advancing automation, innovation and process efficiency to support operational performance and margin expansion.",
            img: "/BOD/Surinder.png"
        },
        {
            name: "Mr. Abhiram Seth",
            title: "Lead Independent Director",
            description: "Mr. Abhiram Seth is a seasoned leader with significant experience at Aquagri and PepsiCo India. His deep expertise in agriculture, exports and sustainability brings valuable insight to the board.",
            img: "/BOD/Abhiram.png"
        },
        {
            name: "Mr. Alrumaih Sulaiman Abdulrahman S",
            title: "Non-Executive Non-Independent Director",
            description: "With a background in electrical engineering and significant experience in investments and business development, Mr. Alrumaih offers a global commercial perspective to the board.",
            img: "/BOD/Sulaiman.webp"
        },
        {
            name: "Mrs. Neeru Singh",
            title: "Independent Director",
            description: "Mrs. Neeru Singh, IAS (Retd.), has served the Indian Government and the UN for nearly four decades. Her leadership in policy, conflict resolution and training adds strategic value to the board.",
            img: "/BOD/Neeru.png"
        },
        {
            name: "Mrs. Ambika Sharma",
            title: "Independent Director",
            description: "Mrs. Ambika Sharma serves as Managing Director, India at the U.S.-India Business Council. Her extensive leadership at FICCI and experience in global strategy strengthen the Company’s international alignment and stakeholder engagement.",
            img: "/BOD/Ambika.png"
        },
        {
            name: "Mr. Raju Lal",
            title: "Independent Director",
            description: "A Chartered Accountant with 30+ years of experience, Mr. Raju Lal has expertise in strategic planning, operational excellence, compliance and business development across diverse sectors.",
            img: "/BOD/Raju.png"
        },
        {
            name: "Mr. Satish Chander Gupta",
            title: "Independent Director",
            description: "Mr. Satish Chander Gupta brings over 40 years of banking experience, including as Chairman and MD of Punjab National Bank. His financial expertise supports the board’s governance and risk oversight.",
            img: "/BOD/gupta.png"
        },
    ];

    return (
        <div className='marginal text-[#57585b]'>
            <div>
                <h1 className='text-3xl font-bold pb-4 border-b border-[#004991] text-black'>
                    Board of Directors
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                    {directors.map((person, index) => (
                        <div key={index} className='flex flex-col items-start'>
                            <img
                                src={person.img}
                                alt={person.name}
                                className='w-full h-100 object-cover object-top rounded-xl border-2 border-gray-300 bg-gradient-to-r from-[#3777ba] to-[#8bc9da]'
                            />

                            <h2 className='text-xl font-bold text-[#3676bc] mt-4'>
                                {person.name}
                            </h2>
                            <h3 className='text-lg font-normal text-black mt-1'>
                                {person.title}
                            </h3>
                            <p className='mt-3 text-base leading-relaxed text-[#57585b]'>
                                {person.description}
                            </p>
                            <div className='w-20 h-1 bg-[#004991] mt-4'></div>
                        </div>
                    ))}
                </div>
                <div className='boder border-2 border-gray-300 rounded-xl mt-10'>
                    <img src="./BOD/group.png" alt="" className='object-cover'/>
                </div>
            </div>
        </div>
    )
}

export default BOD