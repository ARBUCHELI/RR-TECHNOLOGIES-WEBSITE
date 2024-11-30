import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="w-full h-full  flex flex-row justify-between align-middle bg-gradient-to-r from-pink to-purple p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full backdrop-blur-sm bg-white/30 p-10 rounded-lg lg:p-10">
            <div className="text-black font-semibold text-xl xxs:text-s xxs:font-normal sm:text-xl font-notoserif">
            The app features a sleek and user-friendly interface that makes navigating through complex insurance data effortless. It offers comprehensive insights into various life insurance companies, covering everything from policy details to premium rates and claim history.

            What I found particularly useful was the ability to compare different insurance providers side-by-side. This feature helps in making more informed decisions by highlighting the strengths and weaknesses of each company. The interactive charts and graphs make it easy to digest even the most intricate statistics, offering a clear visual representation of key information.
            </div>
            <div className="mt-10">
              <h3 className="text-black text-2xl font-smibold">New Math Data - Texas U.S.A</h3>
              <p className="text-black text-sm font-semibold opacity-50">
                Google review
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
