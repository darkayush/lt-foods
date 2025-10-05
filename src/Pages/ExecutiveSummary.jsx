import React from 'react'

const ExecutiveSummary = () => {
    return (
        <div className='marginal text-[#57585b]'>
            <div>
                <h1 className='text-3xl font-bold pb-4 border-b-1 border-[#004991] text-black'>Executive Summary</h1>
                <h2 className='text-5xl font-light text-[#90a93d] pt-6 leading-snug'>
                    FY2024–25 marked a year of resilient
                    growth and strategic progress for LT
                    Foods, driven by a balanced approach
                    to brand building, market expansion,
                    operational excellence and sustainability.
                </h2>
                <p className='text-xl mt-5 font-light'>
                    We strengthened our presence
                    across key geographies India, North
                    America, Europe, UK, the Middle East
                    and the Far East through targeted
                    product innovations, strategic
                    acquisitions and deeper distribution
                    reach. Our flagship brands,
                    DAAWAT® and Royal®, continued
                    to strengthen premiumisation and
                    category leadership. Alongside, our
                    broader portfolio comprising Golden
                    Star, Heritage, Elephant, Devaaya,
                    Ecolife® and Kari Kari contributed to
                    diversifying our reach and addressing
                    varied consumer preferences across
                    markets. We complemented this
                    brand strength with investments
                    in new capacities, automation
                    and digital transformation that
                    enhanced efficiency, traceability and
                    responsiveness across our value
                    chain.
                </p>
                <p className='text-xl mt-5 font-light'>
                    Aligned with our commitment to
                    responsible growth, we embedded
                    sustainability principles across
                    sourcing, manufacturing and market
                    engagement. From advancing
                    climate-smart farming under
                    the Sustainable Rice Platform to
                    scaling green energy adoption and
                    implementing circular packaging
                    solutions, we have made measurable
                    progress in reducing our carbon
                    footprint. These initiatives, supported
                    by robust governance, a strong
                    balance sheet and disciplined
                    capital allocation, position us to
                    keep creating long-term value for all
                    stakeholders. As we move forward,
                    our focus remains on delivering
                    consistent quality, expanding into
                    high-potential segments and building
                    a future-ready enterprise that
                    balances profitability with purpose.
                </p>
                <h1 className='text-3xl font-bold mt-7 text-black mb-5'>Snapshot of Progress</h1>
                <div >
                    {/* Optional: Add an overlay for better text readability, uncomment if needed */}
                    {/* <div className='absolute inset-0 bg-white opacity-30 rounded-lg'></div> */}
                    
                    <div className='relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8'>
                        
                        {/* 1. 70+ years */}
                        <div className='flex flex-col'>
                            <span className='text-5xl lg:text-6xl font-semibold text-[#004a92] tracking-tighter'>
                                70+ years
                            </span>
                            <div className='flex items-center space-x-1 mt-1 mb-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/50'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/20'></span>
                            </div>
                            <p className='text-lg text-gray-700 font-normal leading-relaxed'>
                                Of industry experience<br />
                                <span className='text-sm text-gray-500'>(from a small Company to a Billion dollar powerhouse)</span>
                            </p>
                        </div>

                        {/* 2. 80+ Countries */}
                        <div className='flex flex-col'>
                            <span className='text-5xl lg:text-6xl font-semibold text-[#004a92] tracking-tighter'>
                                80+
                            </span>
                            <div className='flex items-center space-x-1 mt-1 mb-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/50'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/20'></span>
                            </div>
                            <p className='text-lg text-gray-700 font-normal leading-relaxed'>
                                Countries presence<br />
                                <span className='text-sm text-gray-500'>(well-entrenched global distribution network)</span>
                            </p>
                        </div>

                        {/* 3. ₹13,230 Cr */}
                        <div className='flex flex-col'>
                            <span className='text-5xl lg:text-6xl font-semibold text-[#004a92] tracking-tighter'>
                                ₹13,230 Cr
                            </span>
                            <div className='flex items-center space-x-1 mt-1 mb-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/50'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/20'></span>
                            </div>
                            <p className='text-lg text-gray-700 font-normal leading-relaxed'>
                                Market capitalisation<br />
                                <span className='text-sm text-gray-500'>(as on 31<sup>st</sup> March 2025)</span>
                            </p>
                        </div>

                        {/* 4. 30,000+ */}
                        <div className='flex flex-col'>
                            <span className='text-5xl lg:text-6xl font-semibold text-[#004a92] tracking-tighter'>
                                30,000+
                            </span>
                            <div className='flex items-center space-x-1 mt-1 mb-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/50'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/20'></span>
                            </div>
                            <p className='text-lg text-gray-700 font-normal leading-relaxed'>
                                Procurement Network
                            </p>
                        </div>

                        {/* 5. 2000+ */}
                        <div className='flex flex-col'>
                            <span className='text-5xl lg:text-6xl font-semibold text-[#004a92] tracking-tighter'>
                                2000+
                            </span>
                            <div className='flex items-center space-x-1 mt-1 mb-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/50'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/20'></span>
                            </div>
                            <p className='text-lg text-gray-700 font-normal leading-relaxed'>
                                Distributors Globally
                            </p>
                        </div>

                        {/* 6. 2190 */}
                        <div className='flex flex-col'>
                            <span className='text-5xl lg:text-6xl font-semibold text-[#004a92] tracking-tighter'>
                                2190
                            </span>
                            <div className='flex items-center space-x-1 mt-1 mb-3'>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/50'></span>
                                <span className='w-1.5 h-1.5 rounded-full bg-[#004a92]/20'></span>
                            </div>
                            <p className='text-lg text-gray-700 font-normal leading-relaxed'>
                                Total Manufacturing Capacity<br />
                                <span className='text-sm text-gray-500'>(MT/Day)</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='relative mt-8 p-8 sm:p-12 bg-cover bg-bottom bg-no-repeat rounded-lg min-h-screen'
                    style={{ backgroundImage: `url(./ExecutiveSummary/bg.png)` }}>
                </div>
            </div>
        </div>
    )
}

export default ExecutiveSummary