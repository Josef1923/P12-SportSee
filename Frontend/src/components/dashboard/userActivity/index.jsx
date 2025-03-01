import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./styles.scss";


function Activity({ activityDatas }) {

  if (!activityDatas) return <p>Chargement des données dactivité...</p>;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value} Kcal`}</p>
        </div>
      );
    }
    return null;
  };

  // Validation des props
  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };

  const sessionsData = activityDatas.sessions;

  return (
    <div className="activity">
      <p className="legendTitle">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sessionsData} margin={{ top: 50, left: 43 }} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis yAxisId="right" orientation="right" dataKey="kilogram" tickCount={3} />
          <YAxis yAxisId="left" hide={true} dataKey="calories" />
          <Tooltip content={<CustomTooltip />} />
          <Legend layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{ marginTop: -40, marginRight: 20 }}
            formatter={(value) => (value === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)")} iconType="circle" />
          <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} />
          <Bar yAxisId="left" dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

}

// Validation props
Activity.propTypes = {
  activityDatas: PropTypes.shape({
      sessions: PropTypes.arrayOf(
          PropTypes.shape({
              day: PropTypes.string,
              kilogram: PropTypes.number,
              calories: PropTypes.number,
          })
      )
  })
};

export default Activity;




