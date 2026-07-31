import React from 'react';
import useReveal from '../../hooks/useReveal';
import profilePicture from '../../assets/profilePicture.jpg';
import { Section } from '../../ds/components/layout/Section.jsx';
import { Text } from '../../ds/components/core/Text.jsx';
import { Avatar } from '../../ds/components/content/Avatar.jsx';

const listStyle = { margin: 0, paddingLeft: '1.2em', display: 'grid', gap: '10px' };

function Bullets({ items }) {
    return (
        <ul style={listStyle}>
            {items.map((item, i) => (
                <Text key={i} as="li" type="body" sizing="M" color="var(--text-secondary)">
                    {item}
                </Text>
            ))}
        </ul>
    );
}

function Job({ href, employer, role, dates, items }) {
    return (
        <article style={{ display: 'grid', gap: '14px' }}>
            <div>
                <Text type="display" sizing="XS" as="h3">
                    <a href={href} target="_blank" rel="noopener noreferrer">{employer}</a>
                </Text>
                <Text type="body" sizing="S" color="var(--text-muted)" style={{ marginTop: 6 }}>
                    <strong style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{role}</strong>, {dates}
                </Text>
            </div>
            <Bullets items={items} />
        </article>
    );
}

function TeMechaResume() {
    useReveal();

    return (
        <div className="resume-page">
            <Section width="prose" pad="tight" className="reveal" style={{ paddingTop: '96px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                    <Avatar src={profilePicture} size={96} alt="picture of self" />
                    <div>
                        <Text type="display" sizing="XL" as="h1">TeMecha Griffin</Text>
                        <Text type="label" sizing="L" color="var(--text-muted)" style={{ marginTop: 12 }}>
                            Software Engineer
                        </Text>
                    </div>
                </div>
                <Text type="body" sizing="L" color="var(--text-secondary)" measure style={{ marginTop: 32 }}>
                    Motivated and detail-oriented Software Developer with a strong foundation
                    in front-end web development and experience in technical support. Proven
                    ability to quickly learn and adapt to new technologies and software
                    development tools. Eager to contribute as a vital member of a software
                    engineering team.
                </Text>
            </Section>

            <Section width="prose" pad="tight" className="reveal">
                <Text type="display" sizing="M" as="h2" style={{ marginBottom: 40 }}>Experience</Text>
                <div style={{ display: 'grid', gap: '48px' }}>
                    <Job
                        href="https://www.claytoncountyga.gov/government/information-technology/"
                        employer="Clayton County Board of Commissioners Department of Information Technology"
                        role="Service Desk Technician"
                        dates="March 2024 - October 2024"
                        items={[
                            'Diagnosed and resolved hardware and connectivity issues for county computers, terminals, thin clients, printers, and other peripherals, ensuring minimal downtime.',
                            'Installed, repaired, and maintained telecommunications systems, network cabling, and multimedia systems, supporting seamless communication across county departments.',
                            'Deployed and configured county computers, software, hardware, and peripherals, including workstations, network printers, and Ethernet adapters, ensuring proper system integration and functionality.',
                        ]}
                    />
                    <Job
                        href="https://www.primetherapeutics.com/"
                        employer="Prime Therapeutics"
                        role="Member Services Specialist"
                        dates="April 2022 - March 2024"
                        items={[
                            'Handled customer and client inquiries related to pharmacy insurance, delivering high-quality support and achieving first-call resolution.',
                            'Logged and tracked claims cases, ensuring accurate documentation and timely follow-up.',
                            'Managed customer relationships by providing exceptional service, addressing concerns, and resolving issues in a prompt and professional manner.',
                            'Analyzed complex issues, identified root causes, and implemented effective solutions to improve service delivery.',
                            'Verified insurance coverage and benefits for patients, ensuring correct billing and payment processes were followed.',
                        ]}
                    />

                    {/* FINISH EDITING RESUME, BREAK DOWN INTO SECTIONS --- MOVE LINE AS BOOKMARK */}

                    <Job
                        href="https://transcom.com/us/"
                        employer="Transcom"
                        role="iOS Technical Support Analyst"
                        dates="August 2018-June 2021"
                        items={[
                            'Delivered exceptional technical support to iOS users, resolving hardware and software issues and ensuring customer satisfaction.',
                            'Conducted personalized training sessions for customers, enhancing their understanding and use of iOS devices and applications.',
                            'Documented and tracked customer cases using CRM software, ensuring accurate records and timely resolution.',
                            'Utilized remote access tools to troubleshoot and resolve device issues efficiently, reducing customer downtime.',
                        ]}
                    />
                    <Job
                        href="https://www.linkedin.com/company/usa-800/"
                        employer="USA800, INC"
                        role="Command Center Analyst"
                        dates="September 2017-June 2018"
                        items={[
                            'Monitored account queues and workflow for a team of 25+ agents, ensuring smooth operations and timely task completion.',
                            'Utilized IEX/WFM tools to provide management with staffing recommendations and real-time adjustments to optimize resource allocation.',
                            'Coordinated planned events and integrated them into team schedules, ensuring minimal disruption to workflow.',
                            'Managed real-time and day-of exceptions using WFM software, ensuring staffing accuracy and operational efficiency.',
                            'As an agent, provided phone support for card services inquiries, achieving first-call resolution and maintaining high customer satisfaction.',
                        ]}
                    />
                    <Job
                        href="https://www.xfinity.com/national/"
                        employer="Comcast"
                        role="Work Order Manager"
                        dates="July 2015-August 2016"
                        items={[
                            'Acted as a liaison between Customer Care and Field Technicians, facilitating smooth communication and resolution of work order issues.',
                            'Increased revenue by identifying and correcting work orders that impacted the bottom line, improving operational efficiency.',
                            'Handled escalated customer interactions, providing solutions to complex issues and ensuring customer satisfaction.',
                            'Led special projects as Team Lead, driving initiatives to improve team performance and operational processes.',
                            'Trained new hires, ensuring they were well-equipped to manage work orders and customer concerns.',
                            'Managed the Team Spirit Committee, fostering a positive and motivated work environment.',
                        ]}
                    />
                    <Job
                        href="https://www.henryschein.com/"
                        employer="Henry Schein Inc."
                        role="Software(Dentrix) Support Technician"
                        dates="August 2014-June 2015"
                        items={[
                            'Delivered phone and chat support for Dentrix software, ensuring first-call resolution and exceptional customer service.',
                            'Used remote access tools to troubleshoot and resolve technical issues efficiently, minimizing client downtime.',
                            'Assisted customers with SQL database backups, restores, and transfers, ensuring data integrity and smooth transitions.',
                            'Documented and tracked software issues, escalating complex cases as necessary to maintain effective support workflows.',
                        ]}
                    />
                    <Job
                        href="https://www.bankofamerica.com/"
                        employer="Bank of America"
                        role="Fraud Analyst II"
                        dates="April 2012-July 2015"
                        items={[
                            'Reviewed accounts to detect and prevent potential transaction and identity fraud, mitigating financial risk.',
                            'Analyzed account activity to assess risk levels and identify fraud types, taking proactive steps to safeguard client assets.',
                            'Initiated corrective actions through customer phone contact to verify legitimate transactions, ensuring account security.',
                            'De-escalated complex customer situations, providing reassurance and clarity in high-stress scenarios',
                        ]}
                    />
                    <Job
                        href="https://www.airforce.com/"
                        employer="United States Air Force"
                        role="Knowledge Operation Manager"
                        dates="November 2005-September 2009"
                        items={[
                            'Served as the Client Support Administrator (CSA) and Network Administrator for over 140 computers, ensuring optimal performance and security.',
                            'Installed and managed Portal Flight Planning Software (PFPS) on 44 Secret and Top Secret classified network computers, maintaining compliance with security protocols.',
                            'Operated and repaired all necessary government networks, ensuring continuous access for over 150 computers on the organizational network.',
                            'Provided exceptional customer support to 30+ instructors and staff members, addressing personnel and technical issues efficiently.',
                            'Utilized Trouble Management System (Remedy) to track, document, and resolve customer trouble tickets, improving service response times.',
                            'Managed user accounts and password resets using Active Directory, maintaining security and accessibility for all users.',
                            'Organized, updated, and developed internal policies and programs to oversee 1,500 computers/nodes valued at $1M, enhancing operational efficiency.',
                            'Troubleshot printer connectivity and computer issues, including network card installations and LAN cable checks, ensuring seamless operations.',
                            'Assisted in tech refresh initiatives, successfully upgrading over 200 items, including workstations, servers, printers, and networking capabilities.',
                            'Managed SQL server files, ensuring nightly backups to maintain data integrity and availability.',
                        ]}
                    />
                </div>
            </Section>

            <Section width="prose" pad="tight" className="reveal">
                <Text type="display" sizing="M" as="h2" style={{ marginBottom: 40 }}>Education</Text>
                <div style={{ display: 'grid', gap: '28px' }}>
                    <div>
                        <Text type="display" sizing="XS" as="h3">
                            <a href="https://perscholas.org/" target="_blank" rel="noopener noreferrer">Per Scholas</a>
                        </Text>
                        <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 6 }}>
                            Software Engineering, October 2024-February 2025
                        </Text>
                    </div>
                    <div>
                        <Text type="display" sizing="XS" as="h3">
                            <a href="https://100devs.org/" target="_blank" rel="noopener noreferrer">100Devs</a>
                        </Text>
                        <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 6 }}>
                            Software Engineering, December 2023 – Present
                        </Text>
                    </div>
                    <div>
                        <Text type="display" sizing="XS" as="h3">
                            <a href="https://www.acilearning.com/" target="_blank" rel="noopener noreferrer">ACI Learning</a>
                        </Text>
                        <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 6 }}>
                            Network Support Specialist, October 2023 – December 2023
                        </Text>
                    </div>
                    <div>
                        <Text type="display" sizing="XS" as="h3">
                            <a href="https://www.snhu.edu/" target="_blank" rel="noopener noreferrer">Southern New Hampshire University</a>
                        </Text>
                        <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 6 }}>
                            B.S. in Computer Information Systems – Software Engineering, October 2021 – March 2024
                        </Text>
                    </div>
                    <div>
                        <Text type="display" sizing="XS" as="h3">
                            <a href="https://www.airuniversity.af.edu/Barnes/CCAF/" target="_blank" rel="noopener noreferrer">Community College of the Air Force</a>
                        </Text>
                        <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 6 }}>
                            Associate, Computer Information Systems, November 2005 – September 2009
                        </Text>
                    </div>
                    <div>
                        <Text type="display" sizing="XS" as="h3">Hirschi Math/Science IB Magnet High School</Text>
                        <Text type="body" sizing="M" color="var(--text-secondary)" style={{ marginTop: 6 }}>
                            Diploma, August 2001 – May 2005
                        </Text>
                    </div>
                </div>
            </Section>

            <Section width="prose" pad="tight" className="reveal">
                <Text type="display" sizing="M" as="h2" style={{ marginBottom: 40 }}>Websites</Text>
                <ul style={{ ...listStyle, listStyle: 'none', paddingLeft: 0 }}>
                    <Text as="li" type="body" sizing="L">
                        <a href="https://www.linkedin.com/in/temecha-griffin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </Text>
                    <Text as="li" type="body" sizing="L">
                        <a href="https://github.com/tanewton0523" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </Text>
                    <Text as="li" type="body" sizing="L">
                        <a href="https://x.com/MsGem0523" target="_blank" rel="noopener noreferrer">X</a>
                    </Text>
                    <Text as="li" type="body" sizing="L">
                        <a href="https://linktr.ee/MsGem0523" target="_blank" rel="noopener noreferrer">Linktree</a>
                    </Text>
                </ul>
            </Section>
        </div>
    );
}

export default TeMechaResume;
