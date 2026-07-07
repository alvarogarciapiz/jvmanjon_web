import Icon from './Icon'
import { focusAreas } from '../data/site'
import './FocusAreas.css'

export default function FocusAreas() {
  return (
    <section className="focus" id="frameworks" aria-label="Áreas de enfoque">
      <div className="container focus__grid">
        <p className="focus__label">Áreas de enfoque</p>

        <ul className="focus__list">
          {focusAreas.map((area, i) => (
            <li
              className={`focus__item reveal${i % 3 ? ` reveal-d${i % 3}` : ''}`}
              key={area.title}
            >
              <span className="focus__icon">
                <Icon name={area.icon} size={26} strokeWidth={1.3} />
              </span>
              <span className="focus__text">
                <span className="focus__title">{area.title}</span>
                <span className="focus__suffix">{area.suffix}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
