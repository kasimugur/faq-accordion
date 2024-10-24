import { useEffect, useState } from "react"
import { text, iconMinus, iconPlus, iconStar } from "../pages/page.jsx"
export default function Card() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)

  useEffect(() => {
    if (isOpen1 === true) {
      setIsOpen2(false);
      setIsOpen3(false);
      setIsOpen4(false);
    }
  }, [isOpen1])

  useEffect(() => {
    if (isOpen2 === true) {
      setIsOpen3(false)
      setIsOpen4(false)
      setIsOpen1(false)
    }
  }, [isOpen2])

  useEffect(() => {
    if (isOpen3 === true) {
      setIsOpen1(false)
      setIsOpen2(false)
      setIsOpen4(false)
    }
  }, [isOpen3])

  useEffect(() => {
    if (isOpen4 === true) {
      setIsOpen1(false)
      setIsOpen2(false)
      setIsOpen3(false)
    }
  }, [isOpen4])


  return (
    <>
      <div className="card">
        <div className="acordion">
          <div className="header">
            <span>{iconStar} </span>  <h1>FAQs</h1>
          </div>
          <div className="acordion-item">
            <div onClick={() => setIsOpen1(!isOpen1)} className="acordion-header">
              <h2>

                {text.titles.title1}
                <button>{isOpen1 ? iconMinus : iconPlus}
                </button>

              </h2>
            </div>
            <div className="acordion-body">
              {isOpen1 ? text.contents.content1 : ''}
            </div>
          </div>
          <div className="acordion-item">
            <div
              onClick={() => setIsOpen2(!isOpen2)}
              className="acordion-header">
              <h2>

                {text.titles.title2}

                <button>{isOpen2 ? iconMinus : iconPlus}</button>
              </h2>
            </div>
            <div className="acordion-body">
              {isOpen2 ? text.contents.content2 : ''}
            </div>
          </div>
          <div className="acordion-item">
            <div
              onClick={() => setIsOpen3(!isOpen3)}
              className="acordion-header">
              <h2>

                {text.titles.title3}
                <button>{isOpen3 ? iconMinus : iconPlus}</button>
              </h2>
            </div>
            <div className="acordion-body">
              {isOpen3 ? text.contents.content3 : ''}
            </div>
          </div>
          <div className="acordion-item">
            <div
              onClick={() => setIsOpen4(!isOpen4)}
              className="acordion-header">
              <h2>

                {text.titles.title4}
                <button>{isOpen4 ? iconMinus : iconPlus}</button>
              </h2>
            </div>
            <div className="acordion-body">
              {isOpen4 ? text.contents.content4 : ''}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}