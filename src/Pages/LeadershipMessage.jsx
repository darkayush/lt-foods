import React from 'react'

const LeadershipMessage = () => {
    // Note: The image uses an upward-pointing double chevron/quote icon, 
    // which I'll simulate using a small inline SVG and Tailwind borders.

    return (
        <div className='marginal text-[#57585b]'>
            <div>
                <h1 className='text-3xl font-bold pb-4 border-b-2 border-[#004991] text-black'>Leadership Message</h1>
                <h2 className='text-5xl font-normal text-[#3676bc] pt-6 leading-snug'>
                    Building a Global Food Company
                    with Responsibility and Resilience
                </h2>

                <div className="mt-12 flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0 w-full md:w-1/3 max-w-xs mx-auto md:mx-0">
                        <img
                            src="./LeadershipMessage/DSC_0655.png"
                            alt="Vijay Kumar Arora - Chairman and Managing Director"
                            className="w-full h-auto rounded-md shadow-lg object-cover"
                        />
                        <div className="h-2 bg-[#af6759] w-full mt-1"></div>
                    </div>

                    <div className="md:w-2/3 flex flex-col justify-center">
                        <div className="relative pl-6 py-2">
                            <div className="absolute left-0 top-0 h-full w-1">
                                <div className='absolute -top-1 left-0 transform -translate-x-1 flex flex-col space-y-0.5'>
                                    <span className="w-2 h-2 bg-[#90a93d]"></span>
                                    <span className="w-2 h-2 bg-[#004991]"></span>
                                </div>
                            </div>

                            <p className="text-2xl font-semibold text-[#114a62] leading-relaxed italic">
                                We are steadily shaping LT Foods into a diversified
                                global food Company, anchored in strong brands,
                                resilient supply chains and a culture of innovation.
                                Our strategic focus on premiumisation, global
                                expansion and sustainable sourcing is building a
                                robust foundation for enduring growth and value
                                creation.
                            </p>
                        </div>

                        <div className="mt-8 pt-4 border-t border-gray-300">
                            <p className="text-lg font-bold text-gray-900">
                                Vijay Kumar Arora
                            </p>
                            <p className="font-medium">
                                Chairman and Managing Director
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='text-2xl font-bold text-black'>Dear Stakeholders,</h1>
                    <p className='mt-4 text-xl font-light'>
                        LT Foods has achieved a significant
                        milestone this year by becoming a
                        USD 1 billion food Company. This
                        progress is driven by the growing trust
                        placed on our Brands by consumers
                        across the world, a resilient and
                        responsive global supply chain
                        delivering finest quality food and a
                        deep and broad global distribution
                        network and a sustainable sourcing
                        ecosystem. These outcomes are a
                        result of the collective efforts of our
                        2800 people who continue to power
                        our journey. We have stayed true
                        to our identity as a well-governed,
                        consumer-focused, growth-oriented
                        and responsible Company.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        It gives us great pleasure to share
                        highlights of this journey in the Annual
                        Report for FY 2025.
                    </p>
                    <h2 className='text-2xl text-[#3676bc] font-semibold mt-4'>
                        Sound Strategy and Long-Term
                        Growth
                    </h2>
                    <p className='mt-4 text-xl font-light'>
                        Over the last decade, with a revenue
                        CAGR of 13.6% and have strengthened
                        and deepened our presence across
                        India, US, UK, Europe, Middle East and
                        Far East to become a true global MNC.
                        This expansion into global markets
                        with branded food, predominantly
                        speciality rice, remained at the heart of
                        our LT Foods 2.0 journey.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        Over the past 12 months, we have
                        further expanded and strengthened
                        our product portfolio into ReadyTo-Eat (RTE), Ready-To-Cook (RTC)
                        and Organic Food and Ingredients
                        categories. These are higher-margin
                        branded segments and part of our
                        plan to evolve into a diversified global
                        food Company over the next 10 years,
                        in line with the LT Foods 3.0 vision. We
                        believe this journey is firmly on track.
                    </p>
                    <h2 className='text-2xl text-[#3676bc] font-semibold mt-4'>
                        Strong Performance Across
                        Markets
                    </h2>
                    <div className='flex flex-col md:flex-row gap-8'>
                        <div className='md:w-2/3'>
                            <p className='mt-4 text-xl font-light'>
                                In FY 2025, LT Foods recorded a 12%
                                year-on-year revenue growth and a 8%
                                increase in EBITDA over the previous
                                year. Our long-term performance also
                                stands out, with a ten-year revenue
                                CAGR of 13.6% and a PAT CAGR of
                                26.8%. Our strong focus on brand
                                building and product innovation has
                                consistently helped deliver higher
                                margins across key markets.
                            </p>
                            <p className='mt-4 text-xl font-light'>
                                We enhanced our market
                                diversification by deepening our
                                presence beyond India and the U.S.,
                                expanding into the U.K., Europe and
                                the Middle East, backed by robust
                                sourcing networks across India,
                                Africa and Thailand. In India, the
                                household reach of DAAWAT® has
                                grown significantly demonstrating
                                the strong connection we have built
                                with consumers across segments
                                and regions. This growth is a result of
                                our constant efforts to innovate, stay
                                relevant to evolving consumer needs
                                and ensure that our products are
                                easily accessible across the country.
                            </p>
                            <p className='mt-4 text-xl font-light'>
                                In the US, Royal® holds over 55%
                                share and delivered growth of 18%
                                over the previous year. Our European
                                operations also saw growth of 4%,
                                while the Middle East business
                                scaled significantly by 7%. Our brand
                                portfolio today spans DAAWAT®,
                                Royal®, Golden Star, Rozana, Heritage,
                                Devaaya, Indus Valley, Ecolife, Kari Kari
                                and Leev, covering premium branded
                                speciality rice, RTE and RTC meals and
                                a wide range of organic foods and
                                ingredients which includes branded
                                cereals, flours, pulses, millets, oils,
                                nuts, spices and sweeteners.
                            </p>
                            <p className='mt-4 text-xl font-light'>
                                Our efforts to diversify and expand
                                our portfolio in RTE and RTC space
                                through Kari Kari, the roasted, gluten
                                free snack has been very well received
                                by the consumer and is gradually
                                expanding into new markets.
                            </p>
                            <p className='mt-4 text-xl font-light'>
                                Our go-to-market campaigns created
                                impact across touchpoints and drove
                                stronger consumer connect. Revenues
                                from Basmati and Speciality Rice grew
                                by 11% from the previous year and
                                Organic Foods and Ingredients grew
                                29%** over the previous year. We will
                                continue to build a robust and relevant
                                food portfolio over the coming years.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-full md:w-1/3 max-w-xs mx-auto md:mx-auto md:my-auto">
                        <img
                            src="./LeadershipMessage/146. MB.png"
                            alt="Vijay Kumar Arora - Chairman and Managing Director"
                            className="w-full h-auto rounded-md shadow-lg object-cover"
                        />
                        <div className="h-2 bg-[#af6759] w-full mt-1"></div>
                    </div>
                    </div>
                    <h2 className='text-2xl text-[#3676bc] font-semibold mt-4'>
                        Sustainable Sourcing and
                        Responsible Operations
                    </h2>
                    <p className='mt-4 text-xl font-light'>
                        Sustainability is embedded in our
                        purpose and the way we define
                        progress. Over the years, we have
                        aligned our actions to build a more
                        resilient and responsible food system.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        In 2020, we became the first Company
                        globally to achieve Level 3 verification
                        under the Sustainable Rice Platform
                        (SRP) Assurance Scheme recognising
                        our leadership in sustainable farming.
                        We have since achieved another global
                        first: SRP verification for low-carbon
                        rice cultivation. Independent audits
                        confirm that our practices significantly
                        reduce emissions compared to
                        conventional methods reinforcing
                        our climate-smart approach. We have
                        also initiated climate risk assessments
                        across our operations to proactively
                        manage potential disruptions and
                        strengthen long-term planning.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        Looking ahead, we remain committed
                        to achieving carbon neutrality (Scope
                        1 and 2) for LT Foods (standalone)
                        and Nature Bio Foods by 2030 an
                        ambitious but necessary step in our
                        journey toward a sustainable, futureready organisation.
                    </p>
                    <h2 className='text-2xl text-[#3676bc] font-semibold mt-4'>
                        Digital Transformation and
                        Operational Resilience
                    </h2>
                    <p className='mt-4 text-xl font-light'>
                        Technology has played a key role in
                        enabling agility and cost efficiency.
                        During the year, we stepped up our
                        digital transformation agenda, with
                        increased investments in automation
                        and cyber resilience. These efforts
                        continue to drive better coordination,
                        monitoring and productivity across
                        our operations.
                    </p>
                    <h2 className='text-2xl text-[#3676bc] font-semibold mt-4'>
                        Looking Ahead with Gratitude
                    </h2>
                    <p className='mt-4 text-xl font-light'>
                        As we step into the next phase of
                        our journey, our priorities are clear.
                        We will continue to strengthen our
                        brand portfolio, drive innovation in
                        product and packaging, deepen our
                        sourcing and farmer engagement
                        models and expand market presence
                        organically and inorganically through
                        both in-India and global platforms.
                        Our journey to become a diversified
                        global food Company continues with
                        focus and purpose.
                    </p>
                    <p className='mt-4 text-xl font-light'>
                        We extend our sincere appreciation to
                        all stakeholders including consumers,
                        employees, business partners,
                        farmers, regulatory authorities,
                        investors and shareholders for
                        their trust and continued support.
                        With your encouragement, we look
                        forward to achieving new milestones
                        and building long-term value
                        together.
                    </p>
                    <p className='mt-4 text-2xl font-light'>
                        Thanks and Regards,
                    </p>
                    <p className='mt-2 text-2xl font-bold text-black'>
                        Vijay Kumar Arora
                    </p>
                    <p className='text-2xl font-light'>
                        Chairman and Managing Director
                    </p>
                    <p className='mt-2 text-2xl font-bold text-black'>
                        Ashwani Kumar Arora
                    </p>
                    <p className='text-2xl font-light'>
                        Managing Director and Chief
                        Executive Officer
                    </p>
                    <p className='mt-6 font-light'>
                        ** Growth driven by expanded distribution in Europe and the US <br />
                        ***Discontinuation of ‘DAAWAT® Sehat’ impacted sales growth, direct sales from JV included
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LeadershipMessage
