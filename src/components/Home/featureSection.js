import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/HeroImage.png"
import Image1 from "../../images/education.png"
import Image2 from "../../images/gas.png"
import Image3 from "../../images/bigdata.png"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Успех</h3>
            <h4 className="mt-10 text-black  opacity-70 text-xl">95+</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Доступность</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Стандарты</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">SEO</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
        </div>
      </Fade>

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage}
              alt="HeroImage"
            ></img>
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <h2 className="text-black text-4xl font-semibold">УСПЕХ</h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
              Разработка передового программного обеспечения
            </h3>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              Мы специализируемся на создании сложных программных решений, адаптированных к уникальным потребностям бизнеса.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <a
                  href="tel:#"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Позвоните нам сейчас
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  //href="/gallery"
                  href="#"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                >
                  Посмотреть галерею
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-4xl">
              TECH STACK
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">Gatsby 5+</p>
                <p className="text-black opacity-50 text-sm">React 18+</p>
                {/*<p className="text-black opacity-50 text-sm">SSG and more...</p>*/}
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Tailwind CSS 3+</p>
                <p className="text-black opacity-50 text-sm">Node.js</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Vue.js</p>
                <p className="text-black opacity-50 text-sm">PostgreSql</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Express</p>
                <p className="text-black opacity-50 text-sm">MongoDB</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Docker</p>
                <p className="text-black opacity-50 text-sm">C</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">C#</p>
                <p className="text-black opacity-50 text-sm">Nginx</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Traefix</p>
                <p className="text-black opacity-50 text-sm">Quasar</p>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-white text-4xl">
              Начните создавать удивительные веб-опыты
            </h2>
            <p className="mt-10 text-white opacity-70">
              Наша команда состоит из высококвалифицированных IT-специалистов, включая программистов, дата-сайентистов, аналитиков данных, 
              веб-разработчиков и IT-стратегов. Мы являемся пионерами в области искусственного интеллекта, машинного обучения и цифровой 
              трансформации, раздвигая границы возможного в сфере информационных технологий.
            </p>
            <p className="mt-10 text-white opacity-70">
              Мы специализируемся на создании сложных программных решений, адаптированных к уникальным потребностям бизнеса. Наши услуги 
              включают:
            </p>
            <p className="mt-10 text-white opacity-70">
              <ul>
                <li className="mt-10 text-white opacity-70">* Разработка индивидуального программного обеспечения</li>
                <li className="mt-3 text-white opacity-70">* Интеграция корпоративных приложений</li>
                <li className="mt-3 text-white opacity-70">* Облачные решения</li>
                <li className="mt-3 text-white opacity-70">* IT-консалтинг и стратегии</li>
              </ul>
            </p>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          РАЗРАБОТКА КАСТОМНОГО ПО
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Индивидуальные решения для каждой отрасли
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Наши услуги по разработке кастомного программного обеспечения предназначены для удовлетворения уникальных потребностей вашего бизнеса. 
          От концепции до внедрения мы создаем индивидуальные решения, которые повышают эффективность и способствуют инновациям в 
          различных секторах, включая здравоохранение, финансы, розничную торговлю и производство. С акцентом на масштабируемость и 
          интеграцию наше программное обеспечение разрабатывается так, чтобы адаптироваться и расти вместе с вашей организацией.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          ОТРАСЛЕВЫЕ РЕШЕНИЯ
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Укрепление вашего бизнеса с помощью экспертизы
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Наша команда понимает нюансы различных отраслей, предоставляя специализированное программное обеспечение, которое 
          соответствует вашим операционным целям. Нужна ли вам кастомная система ЭМК для здравоохранения или мощная платформа 
          электронной коммерции для розничной торговли, мы используем наши обширные знания для создания решений, которые не 
          только соответствуют, но и превосходят отраслевые стандарты. Сотрудничайте с нами, чтобы усилить ваше конкурентное 
          преимущество и оптимизировать процессы.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              //href="/contact/"
              href="#"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Отправить запрос
            </a>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Image" src={Image3}></img>
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Образование</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Выпущено</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Газовая промышленность</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">
              Пользовательское программное обеспечение
            </h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Наука о данных</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">
              Прикладная наука о данных
            </h4>
          </div>
        </div>
      </Fade>
      {/* 
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold text-gradient bg-gradient-to-r from-pink to-purple">
          {" "}
          Integrations
        </h2>
        <h3 className="text-black mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
          Discover, connect, and configure
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-purple border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FeatureSection
