import { useState } from "react"
import { text, iconMinus, iconPlus } from "../pages/page"

export default function Card() {
  const [expanded, setExpanded] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  


  return (
    <>
      <div className="card">
        <div className="acordion">

          <div className="acordion-item">
            <div onClick={() => setIsOpen(!isOpen)} className="acordion-header">
              <h2>

                {text.titles.title1}
                <button>{ isOpen ? iconPlus : iconMinus}
                </button>

              </h2>
            </div>
            <div className="acordion-body">
              {expanded || isOpen ? text.contents.content1 : ''}
            </div>
          </div>
          <div className="acordion-item">
            <div
            onClick={() => setIsOpen(!isOpen)}
            className="acordion-header">
              <h2>

                {text.titles.title2}

                <button>{isOpen ? iconPlus : iconMinus}</button>
              </h2>
            </div>
            <div className="acordion-body">
              {isOpen ? text.contents.content2 : ''}
            </div>
          </div>
          <div className="acordion-item">
            <div
            onClick={() => setIsOpen(!isOpen)}
            className="acordion-header">
              <h2>

                {text.titles.title3}
                <button>{isOpen ? iconPlus : iconMinus}</button>
              </h2>
            </div>
            <div className="acordion-body">
              {isOpen ? text.contents.content3 :''}
            </div>
          </div>
          <div className="acordion-item">
            <div
            onClick={() => setIsOpen(!isOpen)}
            className="acordion-header">
              <h2>

                {text.titles.title4}
                <button>{isOpen ? iconPlus : iconMinus}</button>
              </h2>
            </div>
            <div className="acordion-body">
              {isOpen ? text.contents.content4 : ''}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}