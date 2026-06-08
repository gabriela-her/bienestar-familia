import './TeamCard.css'

interface TeamMember {
  id: string
  name: string
  role: string
  specialties: string[]
  bio: string
  image: string
}

interface TeamCardProps {
  member: TeamMember
}

function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="team-card">
      <div className="team-card__image">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="team-card__content">
        <h3 className="team-card__name">{member.name}</h3>
        <p className="team-card__role">{member.role}</p>
        <p className="team-card__bio">{member.bio}</p>
        <div className="team-card__specialties">
          {member.specialties.map((specialty) => (
            <span key={specialty} className="team-card__specialty">
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default TeamCard