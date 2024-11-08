const form = document.getElementById('promptForm');
const promptParagraph = document.getElementById('prompt');

form.addEventListener('submit', (event) => {
    event.preventDefault();

        const uni = document.getElementById('uni').value;
            const course = document.getElementById('course').value;
                const depart = document.getElementById('depart').value;
                    const link1 = document.getElementById('link1').value;
                        const link2 = document.getElementById('link2').value;
                            const link3 = document.getElementById('link3').value;

                                const promptText = `PLEASE REPHRASE THIS STATEMENT OF PURPOSE WITHIN 600 WORDS. REPHRASE IT AS A STATEMENT OF PURPOSE FOR ${uni} UNIVERSITY FOR THE ${course} COURSE. INCLUDE ${uni} University's MISSION ALIGNING WITH THE SOP, THE FACULTY DETAILS AND THEIR RESEARCH, PAST PROJECTS WORKED ON BY THE ${depart} DEPARTMENT. HERE ARE THE REFERENCE LINKS - 
                                    ${link1} 
                                        ${link2} 
                                            ${link3} 
                                            PLEASE KEEP THE PERSONAL STORY AND BACKGROUND INTACT. MAKE IT CREATIVE AND HUMANIZE THE CONTENT, DO NOT SOUND ROBOTIC.`;
                                                promptParagraph.textContent = promptText;
                                                });