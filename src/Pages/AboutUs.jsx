import React from 'react'
import { FaArrowUp } from "react-icons/fa";

// This component is no longer used for differentiators but kept as it was in the original code
const IconPlaceholder = ({ Icon, className }) => (
    <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-[#fcb814] text-white ${className}`}>
        {Icon}
    </div>
);

const CoreValueCard = ({ title, description, imagePath, titleColor, descriptionColor }) => (
    <div className='p-6 border-b md:border-r last:border-b-0 md:odd:border-r md:even:border-r-0'>
        <div className='flex items-start space-x-4'>
            <img src={imagePath} alt={title} className='w-12 h-12 object-contain' />
            <div>
                <h3 className='text-xl font-semibold mb-2' style={{ color: titleColor || '#004991' }}>{title}</h3>
                <p className='text-base font-normal leading-relaxed' style={{ color: descriptionColor || '#374151' }}>{description}</p>
            </div>
        </div>
    </div>
);

const coreValuesData = [
    {
        title: 'Consumer Centricity',
        description: 'We exist to create delightful meal experiences for families while strengthening their bonds. We continuously strive to provide them with the goodness of nature, nurtured and brought to them through our responsibly nutritious, health-focused meal experiences, quality and organic products.',
        imagePath: '/AboutUs/v1.png',
        titleColor: '#a31f5e',
        descriptionColor: '#57585b'
    },
    {
        title: 'Commitment To Excellence',
        description: 'We believe in staying committed to being the best at doing what is right. For us, excellence is a responsibility that we aim to follow every day, ensuring it translates into delightful and sustainable products.',
        imagePath: '/AboutUs/v2.png',
        titleColor: '#a31f5e',
        descriptionColor: '#57585b'
    },
    {
        title: 'Continuous Innovation',
        description: 'Continuous innovation that elevates consumer experiences and caters to emerging consumer needs is at the core of our organisation. We are on a journey to innovate at every level across our value chain, from farming, sustainable processes, packaging and products to newer food experiences in line with the ever-changing consumer needs and preferences.',
        imagePath: '/AboutUs/v3.png',
        titleColor: '#a31f5e',
        descriptionColor: '#57585b'
    },
    {
        title: 'Integrity',
        description: 'We believe in doing what is right and continuously strive to work with trust and transparency. By honouring our commitments, we aim to embody our principles when working with consumers, partners, employees and all other stakeholders.',
        imagePath: '/AboutUs/v4.png',
        titleColor: '#a31f5e',
        descriptionColor: '#57585b'
    },
    {
        title: 'Respect For People',
        description: 'We believe in treating our consumers, partners, employees and all the other stakeholders with mutual trust and respect. We strive to follow fair practices and nurture fulfilling and amicable relationships with all our stakeholders.',
        imagePath: '/AboutUs/v5.png',
        titleColor: '#a31f5e',
        descriptionColor: '#57585b'
    },
    {
        title: 'Responsibility',
        description: 'We are responsible for the betterment and growth of our stakeholders and are responsive towards addressing consumers issues proactively. We constantly strive to take measures to ensure safety and sustainability in all our processes and systems.',
        imagePath: '/AboutUs/v6.png',
        titleColor: '#a31f5e',
        descriptionColor: '#57585b'
    },
];

const differentiators = [
    { title: 'Sustainable Growth', icon: '/AboutUs/y1.png' },
    { title: 'Strong Leading Brands', icon: '/AboutUs/y2.png' },
    { title: 'Global Supply Chain', icon: '/AboutUs/y3.png' },
    { title: 'Consumer Centric Products', icon: '/AboutUs/y4.png' },
    { title: 'Excellence in Operations', icon: '/AboutUs/y5.png' },
    { title: 'Ethical Business Practices', icon: '/AboutUs/y6.png' },
    { title: 'Integrated Business Model', icon: '/AboutUs/y7.png' },
    { title: 'A Culture of Ownership', icon: '/AboutUs/y8.png' },
    { title: 'Investment in Innovation', icon: '/AboutUs/y9.png' },
    { title: "Stakeholder's Value Creation", icon: '/AboutUs/y10.png' },
];

const AboutUs = () => {
    return (
        <div className='marginal text-[#57585b]'>
            <div>
                <h1 className='text-3xl font-bold pb-4 border-b-1 border-[#004991] text-black'>About Us</h1>
                <h2 className='text-5xl font-normal text-[#3676bc] pt-6 leading-snug'>
                    From India to Global
                    Kitchens
                </h2>
                <p className='text-xl mt-5 font-semibold'>
                    LT Foods is a global FMCG
                    Company in the consumer food
                    space with deep roots in India
                    and a growing presence across
                    the United States, Europe, UK,
                    the Middle East and the Far East.
                    With a purpose-led approach
                    and emphasis on consistency
                    and innovation, we operate a
                    diversified portfolio that spans
                    everyday staples to contemporary
                    convenience products anchored
                    by a fully integrated 'Farm to
                    Fork' value chain.
                </p>
                <p className='text-xl mt-5 font-light'>
                    Our flagship brand DAAWAT® leads the
                    Basmati rice segment in India, while
                    Royal® is the No. 1 Basmati brand in
                    the United States. Other prominent
                    brands include Golden Star, Heritage,
                    817 Elephant, Devaaya, Ecolife and Kari
                    Kari each serving diverse consumer
                    needs across geographies. From
                    premium and value-tier rice variants
                    to organic superfoods, ready-to-cook
                    meals and modern snacking formats,
                    our offerings are tailored for evolving
                    lifestyles and culinary preferences.
                </p>
                <p className='text-xl mt-5 font-light'>
                    With a footprint in over 80 countries,
                    our operations are supported by
                    advanced manufacturing facilities
                    located in India, the US, Europe, Africa
                    and the UK. These are complemented
                    by a strong distribution backbone of
                    over 2,000+ distributors, ensuring
                    reach, responsiveness and adherence
                    to global quality benchmarks.
                </p>
                <p className='text-xl mt-5 font-light'>
                    Our focus on sustainable growth
                    is reflected in our practices from
                    sourcing and processing to packaging
                    and logistics. Through technology
                    led traceability, responsible sourcing
                    programmes and a high degree of
                    vertical integration, we continue to
                    build a resilient business aligned
                    with the expectations of modern
                    consumers and global partners.
                </p>
                <div >
                    <div className='relative z-10 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8'>
                        <div className='flex flex-col'>
                            <span className='text-5xl lg:text-6xl font-semibold text-[#004a92] tracking-tighter'>
                                2,800
                            </span>
                            <div className='flex items-center space-x-1 mt-1 mb-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/50'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/20'></span>
                            </div>
                            <p className='text-lg text-gray-700 font-normal leading-relaxed'>
                                Employees
                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-5xl lg:text-6xl font-semibold text-[#004a92] tracking-tighter'>
                                12
                            </span>
                            <div className='flex items-center space-x-1 mt-1 mb-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/50'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/20'></span>
                            </div>
                            <p className='text-lg text-gray-700 font-normal leading-relaxed'>
                                Consumer Loved Brands
                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-5xl lg:text-6xl font-semibold text-[#004a92] tracking-tighter'>
                                ₹ 8,770 Cr
                            </span>
                            <p className="text-2xl font-semibold leading-relaxed flex items-center space-x-1">
                                <span className='text-[#004a92]'>12%</span>
                                <FaArrowUp size={22} className="text-[#004a92]" />
                            </p>
                            <div className='flex items-center space-x-1 mt-1 mb-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/50'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/20'></span>
                            </div>
                            <p className='text-lg text-gray-700 font-normal leading-relaxed'>
                                Revenue (including other Income)
                                in FY 2025
                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-5xl lg:text-6xl font-semibold text-[#004a92] tracking-tighter'>
                                ₹ 3,030 Cr
                            </span>
                            <p className="text-2xl font-semibold leading-relaxed flex items-center space-x-1">
                                <span className='text-[#004a92]'>19%</span>
                                <FaArrowUp size={22} className="text-[#004a92]" />
                            </p>
                            <div className='flex items-center space-x-1 mt-1 mb-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/50'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/20'></span>
                            </div>
                            <p className='text-lg text-gray-700 font-normal leading-relaxed'>
                                Gross Profit in FY 2025
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-[#90a93d] p-5 w-fit mt-5 rounded-2xl'>
                        <h1 className='text-white text-2xl font-bold'>Our Purpose</h1>
                    </div>
                    <h2 className='text-xl font-semibold mt-5'>
                        To nurture a world of
                        goodness. A world where
                        we sustainably unlock
                        the goodness of food for
                        community, country and
                        planet, thereby creating
                        superior value for our
                        stakeholders.
                    </h2>
                    <div className='bg-[#70619d] p-5 w-fit mt-5 rounded-2xl'>
                        <h1 className='text-white text-2xl font-bold'>Our Vision</h1>
                    </div>
                    <h2 className='text-xl font-semibold mt-5'>
                        To be a leading food
                        Company with a global
                        presence in specialty rice,
                        rice-based food, organic
                        food and complementary
                        categories that creates
                        sustainable growth, has a
                        positive impact on society
                        and creates value for its
                        internal as well as external
                        stakeholders.
                    </h2>
                    <div className='bg-[#fcb814] p-5 w-fit mt-5 rounded-2xl'>
                        <h1 className='text-white text-2xl font-bold'>Our Mission</h1>
                    </div>
                    <div className='text-xl font-normal mt-5 space-y-4'>
                        {/* Content for Our Mission */}
                        <div className='flex'>
                            <span className='text-2xl text-[#004991] pr-3 leading-none'>&raquo;</span>
                            <p>Maintain leadership in our flagship rice-based business while striving to deliver the finest and most consistent food experiences.</p>
                        </div>
                        <div className='flex'>
                            <span className='text-2xl text-[#004991] pr-3 leading-none'>&raquo;</span>
                            <p>Diversify and innovate into complementary food categories based on emerging consumer habits.</p>
                        </div>
                        <div className='flex'>
                            <span className='text-2xl text-[#004991] pr-3 leading-none'>&raquo;</span>
                            <p>Continuously strive to give back to our community in the best way we can.</p>
                        </div>
                        <div className='flex'>
                            <span className='text-2xl text-[#004991] pr-3 leading-none'>&raquo;</span>
                            <p>Contribute to the shared growth of our people and deliver superior value to our stakeholders.</p>
                        </div>
                    </div>

                    {/* --- What Differentiates Us? Section --- */}
                    <div className='mt-5'>
                        <h1 className='text-7xl font-semibold text-[#af6759] tracking-tight'>
                            What <span></span>
                            <span className='text-5xl font-normal text-gray-900'>  Differentiates Us?</span>
                        </h1>

                        <div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-6'>
                            {differentiators.map((item, index) => (
                                <div key={index} className='flex items-center space-x-4 p-2'>
                                    {/* Updated to use img tag with dynamic path and existing styling wrapper */}
                                    <div className='flex-shrink-0'>
                                        <div className='w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl font-bold'>
                                            <img src={item.icon} alt={item.title} className='w-15 h-15 object-contain' />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <p className='text-lg font-normal'>
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='bg-[#a31f5e] p-5 w-fit mt-10 rounded-2xl'>
                        <h1 className='text-white text-2xl font-bold'>Our Core Values</h1>
                    </div>

                    <div className='bg-[#f7f7f7] rounded-xl shadow-lg border border-gray-100 mt-5'>
                        {/* Core values are displayed in a responsive 2-column grid */}
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            {coreValuesData.map((value, index) => (
                                <CoreValueCard
                                    key={index}
                                    title={value.title}
                                    description={value.description}
                                    imagePath={value.imagePath}
                                    titleColor={value.titleColor}
                                    descriptionColor={value.descriptionColor}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs