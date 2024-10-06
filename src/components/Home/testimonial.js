import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="w-full h-full  flex flex-row justify-between align-middle bg-gradient-to-r from-pink to-purple p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full backdrop-blur-sm bg-white/30 p-10 rounded-lg lg:p-10">
            <div className="text-black font-semibold text-xl xxs:text-s xxs:font-normal sm:text-xl font-notoserif">
              "Интерфейс очень интуитивно понятный и современный, что делает его удобным для использования. Приложение предоставляет детализированную информацию о различных аспектах образовательной системы: от успеваемости учеников до уровня финансирования школ.

Особенно мне понравилась возможность сравнивать данные между регионами — это помогает лучше понять, где требуется внимание и ресурсы. Интерактивные графики и диаграммы делают восприятие информации простым и наглядным."
            </div>
            <div className="mt-10">
              <h3 className="text-black text-2xl font-smibold">Министерство образования Российской Федерации</h3>
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
