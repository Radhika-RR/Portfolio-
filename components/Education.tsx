
import React from 'react';
import { EDUCATION_DATA } from '../constants';
import Section from './Section';

const Education: React.FC = () => {
    return (
        <Section id="education" title="Education">
            <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white">{EDUCATION_DATA.degree}</h3>
                <p className="text-lg text-sky-400 font-semibold mt-1">{EDUCATION_DATA.institution}</p>
                <div className="mt-4 flex justify-between items-center text-slate-300">
                    <span>CGPA: {EDUCATION_DATA.cgpa}</span>
                    <span>{EDUCATION_DATA.year}</span>
                </div>
            </div>
        </Section>
    );
};

export default Education;
