import Score from "./Score.jsx"   
    
export default function Student({ student }) {
    return (
      <>
        <li>
          <h2>{student.name}</h2>
          <p>{student.bio}</p>
          <Score scores={student.scores} />
        </li>
      </>
    );
  }