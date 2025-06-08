import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion } from "motion/react";

function TimelineVertical() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-[90%] mx-auto">
      <motion.li
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-12 md:text-end">
          <time className="font-mono italic">2010-2015</time>
          <div className="text-lg font-black">Rulang Primary School</div>
          <ul className="text-md text-left">
            <li>CCA: Wushu</li>
          </ul>
        </div>
        <hr className="bg-primary" />
      </motion.li>
      <motion.li
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <hr className="bg-primary" />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">2016-2019</time>
          <div className="text-lg font-black">Jurongville Secondary School</div>
          <ul className="space-y-4 pl-5 list-decimal text-left">
            <li>
              <p className="text-base font-medium">CCA: Tchoukball</p>
              <ul className="text-sm space-y-2 mt-2 pl-0">
                {[
                  "2019: 3rd place – 13th Inter-School B Division Tchoukball Championship",
                  "2018: 1st place – 12th Inter-School B Division Tchoukball Championship (Vice-Captain)",
                  "2017: 2nd place – 12th National Inter-School C Division Tchoukball Championship",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <hr className="bg-primary" />
      </motion.li>
      <motion.li
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <hr className="bg-primary" />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">2020-2023</time>
          <div className="text-lg font-black">Singapore Polytechnic</div>
          <ul className="space-y-4 pl-5 list-decimal text-left">
            <li>
              <p className="text-base font-medium">CLUB: EEE Club</p>
              <ul className="text-sm space-y-2 mt-2 pl-0">
                {[
                  "2022: Freshman Orientation Camp - GL",
                  "2021: Freshman Orientation Camp - Publications Team",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <p className="text-base font-medium">ACHIEVEMENTS:</p>
              <ul className="text-sm space-y-2 mt-2 pl-0">
                {[
                  "AY2021/22: Director's Honour Roll",
                  "2022: 3rd place - Huawei ICT Competition (Asia-Pacific Region)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <p className="text-base font-medium">OTHERS:</p>
              <ul className="text-sm space-y-2 mt-2 pl-0">
                {["2021: Peer Tutor"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <hr className="bg-primary" />
      </motion.li>
      <motion.li
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <hr className="bg-primary" />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">2022-2023</time>
          <div className="text-lg font-black">Venti Technologies</div>
          <ul className="space-y-4 pl-5 list-decimal">
            <li>
              <p className="text-base font-medium">INTERNSHIP: Test Engineer</p>
              <ul className="text-sm space-y-2 mt-2 pl-0">
                {[
                  "Conducted testing for Autonomous Prime Movers (APMs) from early prototyping to fully driverless stages. Drafted safety-critical feature specifications and liaised with cross-functional development teams to ensure implementation",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <hr className="bg-primary" />
      </motion.li>
      <motion.li
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <hr className="bg-primary" />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">2023-2025</time>
          <div className="text-lg font-black">Singapore Armed Forces (SAF)</div>
          <ul className="space-y-4 pl-5 list-decimal text-left">
            <li>
              <p className="text-base font-medium">
                NATIONAL SERVICE: 3 Guards
              </p>
              <ul className="text-sm space-y-2 mt-2 pl-0">
                {["Alpha company Platoon 3 MG Commander"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <hr className="bg-primary" />
      </motion.li>
      <motion.li
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <hr className="py-2" />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-12 md:text-end">
          <time className="font-mono italic">2025-2029</time>
          <div className="text-lg font-black">
            Nanyang Technological University (NTU)
          </div>
          <ul className="space-y-4 pl-5 list-decimal text-left">
            <li>
              <p className="text-base font-medium">
                Bachelor of Electrical & Electronic Engineering:
              </p>
              <ul className="text-sm space-y-2 mt-2 pl-0">
                {["Incoming EEE Student"].map(
                  (item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </li>
          </ul>
        </div>
      </motion.li>
    </ul>
  );
}

export default TimelineVertical;
