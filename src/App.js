import usmanimg from './img/my img.png'

function App() {
  return (
    <div className="container  mx-auto  border-2 ">
      <div className="  flex flex-col sm:flex-row justify-center  ">
        <div className=" leftArea flex flex-col bg-black md:w-1/4 lg:w-1/5 ">
          <div className='flex justify-center w-full '>
            <img className="rounded-full" height={120} src={usmanimg} alt="" />
          </div>
          <div className='flex flex-col w-full items-end'>
            {/* <div className='flex flex-col items-end'> */}
            <div className='flex flex-col w-5/6  space-y-4 text-white'>
              <h1 className='font-semibold p-1 mt-6 text-lg  border-b-2 border-[#7f6726]'>E D U C A T I O N</h1>
              <ul className='p-2'>
                <li className='font-medium text-md'>O-levels (General Certificate of Education)</li>
                <li className='font-light text-sm' >Beacon Light Academy</li>
                <li className='font-light text-sm'>2007 till 2020</li>
                <li className='font-light text-sm'>Maths Ad-Maths ICT etc</li>
                <li className='font-light text-sm'>Grades : 3A*s 3As 3Bs</li>
              </ul>
              <ul className='p-2'>
                <li className='font-medium text-md'>Inter (Pre-Engineering)</li>
                <li className='font-light text-sm'>Dehli Govt College</li>
                <li className='font-light text-sm'>2020 till 2022</li>
                <li className='font-light text-sm'>Grade : A</li>
              </ul>
              <ul className='p-2'>
                <li className='font-medium text-md'>Bachelor In Computer Science</li>
                <li className='font-light text-sm'>Sir Syed University of Engineering</li>
                <li className='font-light text-sm'>2022 till 2026</li>
                <li className='font-light text-sm'>Gpa : 1st Semester = 3.8</li>
                <li className='font-light text-sm'>Gpa : 2nd Semester = 3.4</li>
              </ul>
            </div>
            {/* </div> */}
            <div className='flex flex-col text-white space-y-4 w-5/6  break-all'>
              <h1 className='font-semibold p-1 mt-6 text-lg  border-b-2 border-[#7f6726]'>S O C I A L - L I N K S</h1>
              <ul className='p-2'>
                <li className='font-medium text-md'>Linkdin</li>
                <li className='font-light text-sm cursor-pointer'><a href='https://www.linkedin.com/in/mohammad-usman-71aa9b277/' target='_blank'>https://www.linkedin.com/in/mohammad-usman-71aa9b277/</a></li>
              </ul>
              <ul className='p-2'>
                <li className='font-medium text-md'>Github</li>
                <li className='font-light text-sm cursor-pointer'><a href='https://github.com/MuhammedUsmanKhan' target='_blank'>https://github.com/MuhammedUsmanKhan</a></li>
              </ul>
              <ul className='p-2'>
                <li className='font-medium text-md'>Facebook</li>
                <li className='font-light text-sm cursor-pointer'><a href='https://www.facebook.com/' target='_blank'>https://www.facebook.com/</a></li>
              </ul>
              <ul className='p-2'>
                <li className='font-medium text-md'>Twitter</li>
                <li className='font-light text-sm cursor-pointer'><a href='https://twitter.com/home?lang=en' target='_blank'>https://twitter.com/home?lang=en</a></li>
              </ul>
            </div>
          </div>
          <div className='font-semibold w-full text-white p-2 mt-6 mb-8 text-lg  border-b-2 border-[#7f6726]'>
            <h1 className=''>Contact Me</h1>
          </div>
          <div className='w-full space-y-4 '>
            <div className='flex flex-col w-full  text-white'>
              <div className='flex'>
                <div className='w-1/6 bg-[#fecb00]'></div>
                <span className='pl-2 font-medium bg-[#292a2f] w-5/6'>Phone</span>
              </div>
              <div className='flex'>
                <div className='w-1/6 bg-transparent'></div>
                <span className='pl-2 font-light'>0317-7675185</span>
              </div>
            </div>
            <div className='flex flex-col w-full  text-white'>
              <div className='flex'>
                <div className='w-1/6 bg-[#fecb00]'></div>
                <span className='pl-2 font-medium bg-[#292a2f] w-5/6'>Email</span>
              </div>
              <div className='flex'>
                <div className='w-1/6 bg-transparent'></div>
                <span className='pl-2 font-light'>UKTECH@gmail.com</span>
              </div>
            </div>
            <div className='flex flex-col w-full  text-white'>
              <div className='flex'>
                <div className='w-1/6 bg-[#fecb00]'></div>
                <span className='pl-2 font-medium bg-[#292a2f] w-5/6'>Website</span>
              </div>
              <div className='flex'>
                <div className='w-1/6 bg-transparent'></div>
                <span className='pl-2 font-light w-5/6'>Under Construction</span>
              </div>
            </div>
            <div className='flex flex-col w-full  text-white'>
              <div className='flex'>
                <div className='w-1/6 bg-[#fecb00]'></div>
                <span className='pl-2 font-medium bg-[#292a2f] w-5/6'>Address</span>
              </div>
              <div className='flex'>
                <div className='w-1/6 bg-transparent'></div>
                <span className='pl-2  w-5/6 font-light'>Scheme 33 Gulshan-e-Maymar Mashriqui Society SanaArcade Flat no : 301</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rightArea flex flex-col lg:w-3/5 md:w-3/4 border-2">
          <div className='flex flex-col nameHeading'>
            <div className='nameHeading flex flex-col border-2 '>
              <div className='lg:p-6 md:p-6'></div>
              <div className='lg:p-12 md:p-7 space-y-1 bg-[#fecb00]'>
                <h1 className='lg:text-4xl md:text-2xl space-x-4'><b>M U H A M M A D</b><span>U S M A N</span></h1>
                <p className='space-x-4'><span className='font-semibold'>M E R N</span><span className='font-medium'>S T A C K</span><span className='font-medium'>D E V E L O P E R</span></p>
              </div>
            </div>
            <div className='containerofDivs pl-14 space-y-4 pr-14 pt-8 '>
              <div className='Aboutme space-y-4'>
                <h1 className='space-x-3 text-xl border-black border-b-4 pb-2 text-black font-semibold'><span>A B O U T</span><span>M E</span></h1>
                <div className=''>
                  <p>Hey there! I'm Muhammad Usman, a passionate learner and a student pursuing BCS from Sir Syed University. Currently, I'm on an exciting journey, honing my skills in the MERN stack through a course at Saylani Welfare International Trust. As a dedicated learner, I've successfully completed modules on Firebase, HTML, CSS, MongoDB, and Express, NodeJS bringing me one step closer to becoming a proficient full-stack developer.</p>
                  <p>
                    In my recent endeavors, I've been hard at work on the backend, shaping it into its final form. This experience has taught me the importance of designing scalable and efficient systems to provide seamless user experiences.
                  </p>
                </div>
              </div>
              <div className='Workexperiance space-y-4'>
                <h1 className='space-x-3 text-xl border-black border-b-4 pb-2 text-black font-semibold'><span>W O R K</span><span>E X P E R I A N C E</span></h1>
                <div className='flex'>
                  <div className='w-1/5 font-semibold'>
                    <p>2020-2021</p>
                  </div>
                  <div className='flex flex-col w-4/5'>
                    <div className=''>
                      <h1 className='font-bold'>Dot net Intern</h1>
                      <p className='font-medium'>Super International / Karachi Pakistan</p>
                    </div>
                    <p>VisualBasic.net was the first programming language that i learned during this intership and i came to know about the fundamentals of programming Language and i had made several dekstop application related to the requirment of Company such as inventory App and more e.t.c  </p>
                  </div>
                </div>
                <div className='flex'>
                  <div className='w-1/5 font-semibold'>
                    <p>2023</p>
                  </div>
                  <div className='flex flex-col w-4/5'>
                    <div className=''>
                      <h1 className='font-bold'>Web Developement Intern</h1>
                      <p className='font-medium'>CodSoft / Kolkata , West Bengal</p>
                    </div>
                    <p>They have given me 3 task during my internship . Each task contain several Apps . in which Task one has been completed by me which was to make portfolio , Todo App , Calculator . Task 2 was to make and tribute page and Travel System . Task 3 was to make Blogging Platform and Ecommerce Website. </p>
                  </div>
                </div>
              </div>
              <div className='SoftwareSkill'>
                <h1 className='space-x-3 text-xl mb-8 border-black border-b-4 pb-2 text-black font-semibold'><span>S O F T W A R E</span><span>S K I L L S</span></h1>
                <div class="space-y-3 mb-4">
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-black text-white">
                    Advanced
                  </span>
                </div>
                <div className=' flex flex-col md:flex-row   '>
                  <div className=' md:w-1/2 w-full'>
                    <div className="space-y-3 mb-4">
                      <p className="font-semibold">HTML 5</p>
                      <div className="w-full">
                        <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                          <div className="bg-black h-full w-[40%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' md:pl-8 md:w-1/2 w-full'>
                    <div className="space-y-3 mb-4">
                      <p className="font-semibold">CSS 3</p>
                      <div className="w-full">
                        <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                          <div className="bg-black h-full w-[40%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className=' flex flex-col md:flex-row  '>
                  <div className=' md:w-1/2 w-full'>
                    <div className="space-y-3 mb-4">
                      <p className="font-semibold">HTML 5</p>
                      <div className="w-full">
                        <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                          <div className="bg-black h-full w-[40%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' md:pl-8 md:w-1/2 w-full'>
                    <div className="space-y-3 mb-4">
                      <p className="font-semibold">CSS 3</p>
                      <div className="w-full">
                        <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                          <div className="bg-black h-full w-[40%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className=' flex flex-col md:flex-row  '>
                  <div className=' md:w-1/2 w-full'>
                    <div className="space-y-3 mb-4">
                      <p className="font-semibold">HTML 5</p>
                      <div className="w-full">
                        <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                          <div className="bg-black h-full w-[40%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' md:pl-8 md:w-1/2 w-full'>
                    <div className="space-y-3 mb-4">
                      <p className="font-semibold">CSS 3</p>
                      <div className="w-full">
                        <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                          <div className="bg-black h-full w-[40%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="space-y-3 mt-4 mb-4">
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-black text-white">
                    Intermediate
                  </span>
                </div>
                <div className=' flex flex-col md:flex-row  '>
                  <div className='md:w-1/2 w-full'>
                    <div className="space-y-3 mb-4">
                      <p className="font-semibold">HTML 5</p>
                      <div className="w-full">
                        <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                          <div className="bg-black h-full w-[40%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='md:pl-8 md:w-1/2 w-full'>
                    <div className="space-y-3 mb-4">
                      <p className="font-semibold">CSS 3</p>
                      <div className="w-full">
                        <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                          <div className="bg-black h-full w-[40%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=' flex flex-col md:flex-row  '>
                  <div className='md:w-1/2 w-full'>
                    <div className="space-y-3 mb-4">
                      <p className="font-semibold">HTML 5</p>
                      <div className="w-full">
                        <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                          <div className="bg-black h-full w-[40%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='md:pl-8 md:w-1/2 w-full'>
                    <div className="space-y-3 mb-4">
                      <p className="font-semibold">CSS 3</p>
                      <div className="w-full">
                        <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                          <div className="bg-black h-full w-[40%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=' flex flex-col md:flex-row  '>
                  <div className=' md:w-1/2 w-full'>
                    <div className="space-y-3 mb-4">
                      <p className="font-semibold">HTML 5</p>
                      <div className="w-full">
                        <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                          <div className="bg-black h-full w-[40%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='md:pl-8 md:w-1/2 w-full'>
                    <div className="space-y-3 mb-4">
                      <p className="font-semibold">CSS 3</p>
                      <div className="w-full">
                        <div className="relative w-11/12 bg-gray-200 h-2 rounded-full">
                          <div className="bg-black h-full w-[40%] rounded-full skill-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-valuetext="40% Skill Proficiency"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
