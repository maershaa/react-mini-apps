import PropTypes from 'prop-types';
import { StatisticsWrapper } from '@/components/Statistics/Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsWrapper>
      <ul>
        <li>
          Positive: <span className="stat-good">{good}</span>
        </li>
        <li>
          Neutral: <span className="stat-neutral">{neutral}</span>
        </li>
        <li>
          Negative: <span className="stat-bad">{bad}</span>
        </li>
      </ul>

      <ul className="summaryStats">
        <li>
          Total: <span>{total}</span>
        </li>
        <li>
          Positive Percentage: <span>{positivePercentage}%</span>
        </li>
      </ul>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {};

export { Statistics };
