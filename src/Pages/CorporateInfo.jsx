import React from 'react'

const CorporateInfo = () => {
    // Reusable component for a list item
    const InfoItem = ({ name, role, nameColor = '#f36f31' }) => (
        <p className='py-1 leading-snug'>
            <span className={`font-bold`} style={{ color: nameColor }}>{name}</span>
            <span className='text-sm text-black'>
                {' '}{role && `| ${role}`}
            </span>
        </p>
    );

    // Reusable component for a heading with a separator
    const SectionHeading = ({ children, color = '#3676bc' }) => (
        <h2 className='text-xl font-bold pt-6 pb-2 border-b border-[#004991] tracking-wide' style={{ color: color }}>
            {children}
        </h2>
    );

    return (
        <div className='marginal text-[#57585b]'>
            <div>
                <h1 className='text-4xl font-bold text-black'>Corporate Information</h1>
                {/* Main Content Grid: Two columns for the body content */}
                <div className=''>

                    {/* =========== LEFT COLUMN CONTENT =========== */}
                    <div>
                        {/* BOARD OF DIRECTORS */}
                        <SectionHeading>BOARD OF DIRECTORS</SectionHeading>
                        <div className='space-y-1 pt-2'>
                            <InfoItem name="Vijay Kumar Arora" role="Chairman and Managing Director" />
                            <InfoItem name="Ashwani Kumar Arora" role="Managing Director and Chief Executive Officer" />
                            <InfoItem name="Surinder Kumar Arora" role="Managing Director" />
                            <InfoItem name="Abhiram Seth" role="Lead Independent Director" />
                            <InfoItem name="Alrumaih Sulaiman Abdulrahman S" role="Non-Executive Non-Independent Director" />
                            <InfoItem name="Neeru Singh" role="Independent Director" />
                            <InfoItem name="Ambika Sharma" role="Independent Director" />
                            <InfoItem name="Raju Lal" role="Independent Director" />
                            <InfoItem name="Satish Chander Gupta" role="Independent Director" />
                        </div>

                        {/* KEY MANAGEMENT TEAM - INDIA */}
                        <SectionHeading>KEY MANAGEMENT TEAM</SectionHeading>
                        <h3 className='text-base font-bold text-black mt-4 mb-2'>INDIA</h3>
                        <div className='space-y-1'>
                            <InfoItem name="Ritesh Arora" role="CEO - India and Far East Business" />
                            <InfoItem name="Sanjeev Uppal" role="Chief Supply Chain and Operations Officer" />
                            <InfoItem name="Manoj Chugh" role="Chief Procurement Officer" />
                            <InfoItem name="Monika Chawla Jaggia" role="Chief Corporate Development Officer and Company Secretary" />
                            <InfoItem name="Sachin Gupta" role="Chief Financial Officer" />
                            <InfoItem name="K. Ganapathy Subramaniam" role="Chief Marketing Officer" />
                            <InfoItem name="Palash Aggrawal Chiel Human" role="Resource Officer" />
                            <InfoItem name="Varun Sharma" role="Chief Digital Officer" />
                            <InfoItem name="Amit Mehta" role="Vice President - Foods Business, LT Foods" />
                            <InfoItem name="Anu Sharma" role="Vice President and Head of Legal Affairs" />
                            <InfoItem name="Neeta Marwaha" role="Vice President and Head of Ocean Freight Buying" />
                            <InfoItem name="Arvind Kumar Yadav" role="Assistant Vice President and Head - IT" />
                            <InfoItem name="Rajinder Wadhawan" role="President - Madhya Pradesh Operations" />
                        </div>
                    </div>

                    {/* =========== RIGHT COLUMN CONTENT =========== */}
                    <div>
                        {/* LT FOODS - AMERICAS */}
                        <SectionHeading>LT FOODS - AMERICAS</SectionHeading>
                        <div className='space-y-1 pt-2'>
                            <InfoItem name="Abhinav Arora" role="President" />
                            <InfoItem name="Mukesh Agrawal" role="Chief Financial Officer" />
                            <InfoItem name="Andrew W Cops" role="Senior Vice President - Market, Sales and Strategy" />
                            <InfoItem name="Shankar Satappagol" role="Senior Vice President - Sales, International and Food Service" />
                            <InfoItem name="Snehdeep Brar" role="Vice President - Commercialisation" />
                            <InfoItem name="Shea Levitch" role="Vice President - Human Resources" />
                            <InfoItem name="Amol Deshpande" role="Vice President - Supply Chain" />
                            <InfoItem name="Dhananjay Nair" role="Director - Manufacturing and Engineering" />
                            <InfoItem name="David Mackenzie" role="Director Procurement" />
                        </div>

                        {/* LT FOODS - EUROPE/UK */}
                        <SectionHeading>LT FOODS - EUROPE/UK</SectionHeading>
                        <div className='space-y-1 pt-2'>
                            <InfoItem name="Vikas Magoon" role="Director" />
                            <InfoItem name="Aditya Arora" role="Director" />
                            <InfoItem name="Anmol Arora" role="Director" />
                            <InfoItem name="Anubha Bajaj" role="Director" />
                            <InfoItem name="Vishal Aggarwal" role="Chief Financial Officer (CFO)" />
                            <InfoItem name="Mirna Duskan" role="Human Resource" />
                            <InfoItem name="Vaibhav Srivastava" role="Finance Controller" />
                            <InfoItem name="Oyeyemi Bamisalye" role="Quality" />
                            <InfoItem name="Anil Blaggan" role="Sales Director (Ethnic)" />
                            <InfoItem name="Anita Jobanputra" role="HR Director" />
                            <InfoItem name="Kieran Winestein" role="Operations Director" />
                        </div>

                        {/* LT FOODS - MIDDLE EAST */}
                        <SectionHeading>LT FOODS - MIDDLE EAST</SectionHeading>
                        <div className='space-y-1 pt-2'>
                            <InfoItem name="Gursajan Arora" role="CEO - Middle East Business" />
                            <InfoItem name="Rohit Jaiswal" role="COO and Business Head" />
                            <InfoItem name="Mutaz Hijazi" role="Business Head - KSA" />
                            <InfoItem name="Vivek Kumar" role="General Manager - Sales and Business Development" />
                            <InfoItem name="Saumya Sinha" role="Associate Vice President - Marketing" />
                        </div>

                        {/* NATURE BIO FOODS LIMITED */}
                        {/* Using the specific color #995d43 */}
                        <SectionHeading color='#995d43'>NATURE BIO FOODS LIMITED</SectionHeading>
                        <div className='space-y-1 pt-2'>
                            <InfoItem name="Rohan Grover" role="Director" />
                            <InfoItem name="Rajesh Jaswal" role="Vice President - Operations" />
                            <InfoItem name="Krishnendu Chattopadhyay" role="Vice President - Agri Projects" />
                            <InfoItem name="Dr. Saroj Kumari" role="General Manager - Certifications" />
                            <InfoItem name="Santosh Gautam" role="General Manager - Certifications" />
                            <InfoItem name="Christiane Bell" role="Director- Sales" />
                        </div>

                        {/* STATUTORY AUDITORS */}
                        <SectionHeading>Statutory Auditors</SectionHeading>
                        <p className='py-1'>MSKA & Associates</p>

                        {/* INTERNAL AUDITORS */}
                        <SectionHeading>Internal Auditors</SectionHeading>
                        <p className='py-1'>Protiviti India Member Private Limited</p>
                        
                        {/* SECRETARIAL AUDITORS */}
                        <SectionHeading>Secretarial Auditors</SectionHeading>
                        <p className='py-1'>D Dixit & Associates</p>

                        {/* BANKERS TO THE COMPANY */}
                        <SectionHeading>BANKERS TO THE COMPANY</SectionHeading>
                        <div className='py-1 text-black text-sm'>
                            <p>Punjab National Bank (Lead Bank)</p>
                            <p>State Bank of India</p>
                            <p>ICICI Bank Ltd.</p>
                            <p>Indusind Bank</p>
                            <p>Kotak Mahindra Bank Ltd.</p>
                            <p>HDFC Bank Ltd.</p>
                            <p>Qatar National Bank Q.P.S.C.</p>
                            <p>CTBC Bank Co. Ltd.</p>
                            <p>Doha Bank Q.P.S.C.</p>
                            <p>Union Bank of India</p>
                            <p>SBM Bank (India) Ltd.</p>
                            <p>Federal Bank Ltd.</p>
                            <p>Bank of Baroda</p>
                            <p>Mashreq Bank</p>
                            <p>Rabobank</p>
                            <p>Cooperative Rabo Bank U.A.</p>
                            <p>Mechanics Bank</p>
                            <p>JP Morgan Bank</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CorporateInfo