import type { SkillCategory } from '../../data/skills';
import './SkillCard.css';

const SkillCard = (category: SkillCategory, idx: number) => {
  return (
    <div
      key={category.id}
      className="skill-item"
    >
      <div className="skill-number">[{String(idx + 1).padStart(2, '0')}]</div>
      <h2>{category.label}</h2>
      <ul>
        {category.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
