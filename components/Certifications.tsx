
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import Section from './Section';

const CertificateIcon: React.FC<{className: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 15l-3.5-3.5a2.1 2.1 0 1 1 3-3L12 9l.5-.5a2.1 2.1 0 1 1 3 3L12 15z"/>
        <path d="M19 4v16H5V4h14m0-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
    </svg>
);


const Certifications: React.FC = () => {
    return (
        <Section id="certifications" title="Certifications">
            <div className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                    {CERTIFICATIONS.map(cert => (
                        <li key={cert.title} className="bg-slate-800 p-4 rounded-lg flex items-center space-x-4">
                            <CertificateIcon className="h-8 w-8 text-sky-400 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-white">{cert.title}</h4>
                                <p className="text-sm text-slate-400">{cert.issuer}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Certifications;
