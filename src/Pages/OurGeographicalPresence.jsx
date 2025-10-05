import React from 'react'

const distributionHubs = [
    { country: 'India', hubs: 30 },
    { country: 'Dubai', hubs: 2 },
    { country: 'Netherlands', hubs: 2 },
    { country: 'UK', hubs: 1 },
    { country: 'US', hubs: 3 },
    { country: 'Uganda', hubs: 1 },
];

const globalSourcing = [
    { country: 'India', sourcing: '86.7%' },
    { country: 'Thailand', sourcing: '4.7%' },
    { country: 'Uganda', sourcing: '0.4%' },
    { country: 'Cambodia', sourcing: '0.8%' },
    { country: 'Others', sourcing: '7.4%' },
];

const manufacturingUnits = [
    { unit: 'Bahalgarh, Haryana', capacity: '990' },
    { unit: 'Mandideep, Madhya Pradesh', capacity: '850' },
    { unit: 'Kamaspur, Haryana', capacity: '350' },
    { unit: 'Varpal, Punjab', capacity: '250' },
    { unit: 'Bhikhiwind, Punjab', capacity: '100' },
    { unit: 'Rotterdam, Netherlands', capacity: '43200*' },
    { unit: 'Houston, USA', capacity: '4291*' },
    { unit: 'Harlow, U.K.', capacity: '140 pouches Per Minute (Black Bottom)\n70 pouches Per Minute (Pillow)' },
];

const Table = ({ title, data, color, headers, note = '' }) => {
    // Determine header classes based on the number of columns (2 or 3)
    const headerWidthClass = headers.length === 2 ? 'w-1/2' : 'w-1/3';
    
    // Check if the color is white and apply a border
    const borderClass = color === '#ffffff' ? 'border border-gray-400' : '';

    return (
        <div className="mb-8">
            {/* Title Block with Colored Circle */}
            <div className='flex items-center space-x-2 mb-4'>
                {/* Applied borderClass here */}
                <div className={`w-3 h-3 rounded-full ${borderClass}`} style={{ backgroundColor: color }}></div>
                <h3 className='text-xl font-semibold text-gray-900'>{title}</h3>
            </div>

            {/* Table Structure */}
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#004991] text-white text-sm font-medium uppercase tracking-wider">
                        <tr>
                            {headers.map((header, index) => (
                                <th 
                                    key={index} 
                                    scope="col" 
                                    className={`px-6 py-3 text-left ${index === 0 ? headerWidthClass : 'w-1/2'} ${index === 0 ? 'bg-[#90a93d]' : 'bg-[#3676bc]'} ${headers.length === 3 ? 'w-1/3' : 'w-1/2'}`}
                                >
                                    {header.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {data.map((row, index) => (
                            <tr key={index} className="bg-white hover:bg-gray-50 text-gray-700">
                                {/* Country/Unit Column */}
                                <td className="px-6 py-3 whitespace-nowrap font-medium text-gray-900" style={{ backgroundColor: headers.length === 3 ? '#90a93d20' : '#00499110' }}>
                                    {row[headers[0].key]}
                                </td>
                                {/* Value Column 1 */}
                                <td className="px-6 py-3 whitespace-pre-wrap text-left">
                                    {row[headers[1].key]}
                                </td>
                                {/* Value Column 2 (for 3 column table only) */}
                                {headers.length === 3 && (
                                    <td className="px-6 py-3 whitespace-pre-wrap text-left">
                                        {row[headers[2].key]}
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {note && (
                <p className="mt-2 text-xs text-gray-500 font-light leading-relaxed">
                    {note}
                </p>
            )}
        </div>
    );
};

const OurGeographicalPresence = () => {
    return (
        <div className='marginal text-[#57585b] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            <div>
                <h1 className='text-3xl font-bold pb-4 border-b-2 border-[#004991] text-black'>Our Geographical Presence</h1>
                <h2 className='text-5xl font-normal text-[#3676bc] pt-6 leading-snug'>
                    Delivering Excellence
                    Across Every Market We
                    Serve
                </h2>
                {/* Placeholder for the main geographical map/artboard image */}
                <img src="/OurGeographicPresence/Artboard 1-100.webp" alt="Map of Geographical Presence" className="w-full h-auto mt-8 mb-10" />

                {/* --- Data Tables Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 mt-10">
                    {/* 1. Distribution Hubs Table (Left Column) */}
                    <Table
                        title="Distribution Hubs"
                        data={distributionHubs}
                        color="#fcb814"
                        headers={[
                            { key: 'country', label: 'Country' },
                            { key: 'hubs', label: 'Number of Distribution Hubs' }
                        ]}
                    />

                    {/* 2. Global Sourcing Table (Right Column) */}
                    <Table
                        title="Global Sourcing"
                        data={globalSourcing}
                        color="#a31f5e"
                        headers={[
                            { key: 'country', label: 'Country' },
                            { key: 'sourcing', label: 'Sourcing' }
                        ]}
                    />
                </div>

                {/* 3. Manufacturing Units Table (Full Width) */}
                <div className="mt-10 flex md:flex-row flex-col gap-8">
                    <div className='md:w-1/2'>
                        <Table
                            title="Manufacturing Units"
                            data={manufacturingUnits}
                            color="#ffffff" // The color for this circle is white
                            headers={[
                                { key: 'unit', label: 'Country' }, // Renamed from 'unit' to 'Country' as per image
                                { key: 'capacity', label: 'Manufacturing Capacity (MT/Day)' }
                            ]}
                            note="*MT per year"
                        />
                        <p className="text-sm font-light">
                            Maps are not to scale. Used for representation purposes only
                        </p>
                    </div>
                    <div className='md:w-1/2'>
                        <img src="./OurGeographicPresence/India.png" alt="" className='rounded-4xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurGeographicalPresence
