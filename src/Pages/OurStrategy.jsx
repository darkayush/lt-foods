import React from 'react'

const OurStrategy = () => {
    // Component to represent the circular bullet point line
    const DottedLine = () => (
        <div className="absolute left-1.5 top-0 h-full w-0.5 bg-gray-300 opacity-70"></div>
    );

    // Component to represent a single row in the Material Matters section
    const MaterialItem = ({ content }) => (
        <div className="relative mb-8 pl-8">
            <div className="absolute left-0 top-0 mt-0.5 w-4 h-4 rounded-full bg-[#004991] z-10 border-2 border-white"></div>
            <p className="text-lg text-[#57585b] font-normal leading-relaxed">{content}</p>
        </div>
    );

    // Capital Icons tailored to better match the images' colors and shapes
    const FinancialIcon = () => (
        <svg className="w-8 h-8 text-[#4a72b8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25l-8.5 4.5v12.5l8.5 4.5 8.5-4.5V6.75l-8.5-4.5zM12 4.75l7.5 4v11.5l-7.5 4V4.75zM12 4.75l-7.5 4v11.5l7.5 4V4.75zM12 4.75l7.5 4v11.5l-7.5 4V4.75zM12 4.75l-7.5 4v11.5l7.5 4V4.75z" fill="currentColor" />
            <path d="M12 17.5v-8.5m-3 4.5l3 3m3-3l-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
    const ManufacturedIcon = () => (
        <svg className="w-8 h-8 text-[#e39c4d]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17H8v-2h2v2zm6 0h-2v-2h2v2zm-6-4H8v-2h2v2zm6 0h-2v-2h2v2z" fill="currentColor" />
            <path d="M18 19H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
    const IntellectualIcon = () => (
        <svg className="w-8 h-8 text-[#4a978f]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm0-8.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5z" fill="currentColor" />
            <path d="M12 13.5v-11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
    const SocialIcon = () => (
        <svg className="w-8 h-8 text-[#9762c2]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" />
        </svg>
    );

    // Component for a single Capitals Impacted card
    const CapitalCard = ({ title, bgColor, IconComponent }) => (
        <div className="flex items-center p-2 mb-4">
            <div className={`flex items-center justify-center w-14 h-14 rounded-full mr-4 ${bgColor}`}>
                <IconComponent />
            </div>
            <p className="text-xl font-semibold text-[#57585b]">{title}</p>
        </div>
    );

    // DATA FOR THE FIRST SECTION (image_f81ca5.png)
    const dataV1 = {
        capitals: [
            { title: "Financial Capital", bgColor: "bg-blue-100/50", Icon: FinancialIcon },
            { title: "Manufactured Capital", bgColor: "bg-orange-100/50", Icon: ManufacturedIcon },
            { title: "Intellectual Capital", bgColor: "bg-green-100/50", Icon: IntellectualIcon },
            { title: "Social and Relationship Capital", bgColor: "bg-purple-100/50", Icon: SocialIcon },
        ],
        matters: [
            "We continue to diversify our geographic presence to reduce market concentration and manage external risks.",
            "Our focus remains on strengthening our brand equity while moving up the value curve through premium offerings.",
            "The product portfolio is consistently aligned with evolving consumer preferences around health, convenience and authenticity.",
            "We maintain strict adherence to global standards of food safety and quality across all operations.",
        ]
    };

    // DATA FOR THE SECOND SECTION (image_f89805.png)
    const dataV2 = {
        capitals: [
            { title: "Financial Capital", bgColor: "bg-blue-100/50", Icon: FinancialIcon },
            { title: "Intellectual Capital", bgColor: "bg-green-100/50", Icon: IntellectualIcon },
            { title: "Social and Relationship Capital", bgColor: "bg-purple-100/50", Icon: SocialIcon },
        ],
        matters: [
            "Access new consumer segments through wider reach.",
            "Build brands with targeted campaigns and innovation.",
            "Serve diverse needs across price points and regions.",
            "Adapt products to local tastes and preferences.",
        ]
    };


    const CapitalsAndMattersBlock = ({ capitals, matters }) => (
        <div className='mt-12 flex flex-col lg:flex-row gap-8'>
            {/* Left Column: Capitals Impacted */}
            <div className="lg:w-1/2 p-6 rounded-2xl shadow-xl border border-gray-100 bg-white">
                <h2 className='text-2xl font-bold text-black mb-6'>Capitals Impacted</h2>
                <div className="space-y-4">
                    {capitals.map((item, index) => (
                        <CapitalCard
                            key={index}
                            title={item.title}
                            bgColor={item.bgColor}
                            IconComponent={item.Icon}
                        />
                    ))}
                </div>
            </div>

            {/* Right Column: Material Matters */}
            <div className="lg:w-1/2 p-0">
                <h2 className='text-2xl font-bold text-black mb-6'>Material Matters</h2>
                <div className="relative">
                    <DottedLine />
                    {matters.map((content, index) => (
                        <MaterialItem key={index} content={content} />
                    ))}
                </div>
            </div>
        </div>
    );


    return (
        <div className='marginal text-[#57585b]'>
            <div>
                <h1 className='text-3xl font-bold pb-4 border-b-1 border-[#004991] text-black'>Our Strategy </h1>
                <h2 className='text-5xl font-normal text-[#3676bc] pt-6 leading-snug'>
                    Resilient Moves for
                    a Sustainable Future
                </h2>
                <div>
                    <h2 className='text-3xl font-normal text-[#90a93d] pt-5 leading-snug'>
                        Expanding Through Organic
                        and Inorganic Growth
                    </h2>
                    <p className='text-xl mt-5 font-semibold'>
                        We are focused on sustainable
                        and profitable growth through
                        revenue expansions driven by a
                        mix of core business’ growth and
                        selective strategic acquisitions,
                        supported by cost discipline and
                        judicious deployment of EBIDTA
                        to fund future growth and deliver
                        superior shareholder returns.
                        The goal is to create a balanced
                        portfolio that enhances resilience
                        and sustainability and taps into
                        global trends focusing on health
                        and convenience.
                    </p>
                    <h2 className='text-black text-2xl font-semibold mt-5'>
                        Our Strategy in Action
                    </h2>
                    <p className='mt-4 text-xl font-light'>
                        We are deepening penetration in key
                        geographies, strengthening brand
                        equity and enhancing value through
                        diversification into adjacent categories
                        and high-growth segments.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        Equally important is the strength
                        of our brand portfolio, which today
                        goes beyond our flagship DAAWAT®
                        and Royal® to include Rozana,
                        Heritage, Devaaya, Golden Star,
                        Indus Valley, Ecolife®, Kari Kari® and
                        Leev. These brands span specialty
                        rice, convenience-led Ready-ToEat (RTE) and Ready-To-Cook (RTC)
                        categories and organic foods,
                        enabling us to engage closely with
                        consumers across all markets.
                        Our strategic focus on branded
                        products enhances premiumisation,
                        fosters strong consumer loyalty
                        and provides resilience against
                        inflationary pressures or unforeseen
                        supply chain disruptions. Inorganic
                        growth through selective
                        acquisitions has further added scale
                        and strengthened our consumer-first
                        positioning.
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row gap-8 mt-5'>
                    <div className='lg:w-1/2'>
                        <img src="./OurStrategy/table.png" alt="" className='w-150' />
                    </div>
                    <div className='lg:w-1/2 flex items-center'>
                        <img src="./OurStrategy/image.png" alt="" className='mt-5' />
                    </div>
                </div>
                <div>
                    <p className='mt-4 text-xl font-light'>
                        Strategic localisation played a central
                        role in aligning product formats,
                        packaging and pricing with regional
                        preferences. At the same time, our
                        global distribution hubs including
                        new warehouses and manufacturing
                        facilities in UK and the Netherlands
                        enabled responsive supply chains
                        and improved service delivery across
                        80+ countries.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        In FY 2025, we enhanced our
                        presence across general trade,
                        modern trade, e-commerce and quick
                        commerce platforms in markets
                        including India, the United States,
                        Europe, UK, Middle East and Far
                        East. Brand equity and engagement were elevated through campaigns for
                        DAAWAT®, Royal®, Devaaya , Heritage
                        and Kari Kari across digital media,
                        television, outdoor advertising and
                        local community activations in India
                        and US. In the UK, DAAWAT® gained
                        traction with mainstream consumers
                        through a multi-platform approach
                        In the UK and Europe, we also
                        reinforced our private label business
                        by onboarding leading retailers. In
                        the US, we deepened our presence
                        in the organic and specialty segment
                        through Nature Bio Foods, expanding
                        the Consumer Packaged Goods (CPG)
                        product range with items such as
                        quinoa, chia, flaxseed, millets and red
                        lentils. These offerings were aligned to regional demand patterns and sourced
                        from diverse geographies, including
                        India, Uganda, Peru and Bolivia,
                        supporting both product diversity and
                        supply resilience. In Middle East we
                        have further strengthened our Brands
                        through sustained media and digital
                        marketing.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        Innovation remained a core driver
                        with new launches of DAAWAT® Thai
                        Green Curry Rice Kit and an expanded
                        Kari Kari range featuring the new
                        ‘Krispy Hopu’ snack. Our organic
                        food brand, Ecolife, also broadened
                        its portfolio with new additions such
                        as millets, quinoa, flaxseed, psyllium
                        husk and chia.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        Our M&A approach remains strategic
                        and value accretive, focusing on
                        integration capabilities, cultural
                        alignment and long term value
                        creation. We initiated the acquisition
                        of Global Green Group and we have
                        also completed the acquisition of
                        Golden Star and we are happy to
                        note that it has become the leading
                        Jasmine rice brand in the US. In
                        the Middle East we have further
                        strengthened our position by opening
                        a subsidiary in KSA.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        Capacity expansion supported
                        our growth ambitions across key
                        markets. In the US, we doubled the
                        capacity of our Ready-To-Eat (RTE)
                        and Ready-To-Cook (RTC) plant to
                        cater the rising domestic and export
                        demand. Operational enhancements
                        at our Bahalgarh and Mandideep
                        plants in India such as rice recovery
                        optimisation, dehusking projects and
                        hygiene improvements contributed
                        to improved operational efficiency.
                        In the UK, we operationalised a
                        manufacturing unit in Harlow,
                        improving service levels and lead
                        times for both branded and private
                        label products. During the year,
                        our organic arm, Nature Bio Foods
                        (NBF), into next level of Value chain
                        by supplying to the retailers directly
                        in Europe with the inauguration
                        of a state-of-the-art facility in
                        Maasvlakte, Rotterdam. Spread over
                        20,000 square meters, the facility is
                        strategically located at the Port of
                        Rotterdam widely regarded as the
                        ‘Gateway to Europe’.
                    </p>
                </div>
                <div>
                    <h2 className='text-3xl font-normal text-[#90a93d] pt-5 leading-snug'>
                        Accelerating Growth Through
                        Strategic Enablers
                    </h2>
                    <p className='text-xl mt-5 font-semibold'>
                        We continue to strengthen
                        our competitive position
                        by investing in high-impact
                        growth drivers across
                        brands, distribution, product
                        innovation and strategic
                        private label. From targeting
                        mainstream retail in developed
                        markets to diversifying across
                        price segments, our strategy
                        enables deeper consumer
                        engagement and wider access
                        globally.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        These moves are supported by
                        a strong marketing ecosystem,
                        B2B channel development and
                        localisation to meet regional
                        preferences. With strategic
                        infrastructure and partnerships in
                        place, we are enhancing market
                        share while building lasting value.
                    </p>
                    <h2 className='text-black text-2xl font-semibold mt-5'>
                        Our Strategy in Action
                    </h2>
                    <p className='mt-4 text-xl font-light'>
                        Alongside portfolio and
                        market expansion, our growth
                        is underpinned by a strong
                        organisational backbone. We have
                        built a high-quality workforce
                        across geographies, supported
                        by robust HR processes. With
                        17% women in management and
                        a diverse board including two
                        women directors, we continue to
                        prioritise inclusivity and leadership
                        diversity, strengthening our
                        operational resilience and long-
                        term competitiveness.
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row gap-8 mt-5'>
                    <div className='lg:w-2/3'>
                        <img src="./OurStrategy/table2.png" alt="" />
                    </div>
                    <div className='lg:w-1/3 flex items-center'>
                        <img src="./OurStrategy/image2.png" alt="" />
                    </div>
                </div>

                <div>
                    <h2 className='text-3xl font-normal text-[#90a93d] pt-5 leading-snug'>
                        Enhancing Efficiency to
                        Unlock Margin Potential
                    </h2>
                    <p className='text-xl mt-5 font-semibold'>
                        We remain committed to
                        driving profitable growth by
                        enhancing operational efficiency,
                        maximising yields and optimising
                        resource utilisation across the
                        value chain. Our plants have
                        seen consistent improvement
                        in output efficiency, energy
                        savings and inventory control
                        through process innovations and
                        automation.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        Digital tools like real-time
                        dashboards, Supervisory Control and
                        Data Acquisition (SCADA) systems
                        and automated packaging lines
                        are streamlining operations while
                        reducing waste. Our bottom-up
                        manufacturing excellence initiatives
                        are yielding consistent performance
                        improvements with minimal capex.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        We achieved over 85% plant
                        utilisation across the Group, with
                        operational efficiency improving
                        by 5% year-on-year. Automation
                        was a key enabler, Digital platforms
                        like EWMS (Extended Warehouse
                        Management System) and the
                        Advanced planning tool played a
                        critical role.
                    </p>

                </div>

                <div className='flex flex-col lg:flex-row gap-8 mt-5'>
                    <div className='lg:w-2/3'>
                        <img src="./OurStrategy/table3.png" alt="" />
                    </div>
                    <div className='lg:w-1/3 flex flex-col items-center'>
                        <img src="./OurStrategy/image3.png" alt="" />
                        <img src="./OurStrategy/image4.png" alt="" />
                    </div>
                </div>

                <div>
                    <h2 className='text-3xl font-normal text-[#90a93d] pt-5 leading-snug'>
                        Prudent Capital Allocation
                        and Financial Discipline
                    </h2>
                    <p className='text-xl mt-5 font-semibold'>
                        Our capital deployment
                        approach is selective and
                        outcome-oriented, prioritising
                        investments that enhance
                        returns and support longterm strategy. Whether
                        through brownfield expansion,
                        automation and M&A, we apply
                        rigorous evaluation to ensure
                        financial viability and strategic
                        alignment.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        Strong balance sheet, controlled
                        leverage and a clear focus on return
                        on capital have enabled us to fund
                        growth responsibly both organically
                        and inorganically while protecting
                        shareholder value.
                    </p>
                    <h2 className='text-black text-2xl font-semibold mt-5'>
                        Our Strategy in Action
                    </h2>
                    <p className='mt-4 text-xl font-light'>
                        Capital deployment during the year
                        was focused on high-impact areas
                        such as automation, green energy,
                        warehouses and regional expansion.
                        In India, we commissioned a new
                        turbine at the Mandideep facility
                        and installed solar infrastructure
                        across multiple plants, enhancing
                        energy self-sufficiency and reducing
                        reliance on external power sources.
                        These moves also supported our
                        sustainability goals while lowering
                        long-term operational costs and
                        reducing carbon emissions.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        Selective automation investments
                        included flash recovery systems
                        for steam drying and low-pressure
                        drying lines, which contributed to
                        both cost and emission reduction.
                        Nature Bio Foods (NBF) has forayed
                        into the B2C segment in Europe
                        with a new facility at the Port of
                        Rotterdam. Equipped with advanced
                        processing, packaging and smart
                        warehousing, the site will handle
                        15,000 MT of organic products
                        annually. During the year we have
                        doubled the capacity of Ready to
                        Heat plant in Houston.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        On the inorganic front the
                        100%* acquisition of Golden Star
                        strengthens our presence in the
                        high-value Jasmine segment and
                        complements our Royal
                        ® brand
                        portfolio in North America.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        These initiatives are part of our
                        larger transformation journey.
                        Over the past decade, LT Foods
                        has delivered a revenue CAGR of
                        13.6%, evolving into a USD 1 billion
                        global food Company with a strong
                        presence across India, the US, the
                        UK, Europe and the Middle East
                        and sustainable sourcing from India, Africa and Thailand. While
                        our LT Foods 2.0 journey was
                        anchored in scaling branded foods,
                        predominantly speciality rice, the
                        expansion of our product portfolio
                        into higher-margin Ready-To-Eat
                        (RTE) and Ready-To-Cook (RTC)
                        categories over the last 12 months
                        reflects the progression towards LT
                        Foods 3.0 our vision of becoming a
                        diversified global food Company.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        Together, these targeted
                        investments reflect a disciplined
                        capital approach balancing growth
                        with financial prudence, enhancing
                        long-term return metrics and
                        delivering sustained value to
                        shareholders.
                    </p>
                    <p className='mt-4'>
                        *as of June 30, 2025 
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row gap-8 mt-5'>
                    <div className='lg:w-2/3'>
                        <img src="./OurStrategy/table4.png" alt="" />
                    </div>
                    <div className='lg:w-1/3 flex flex-col items-center'>
                        <img src="./OurStrategy/image5.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStrategy