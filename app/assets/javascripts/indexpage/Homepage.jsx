let Homepage = React.createClass({
  propTypes: {
    skills: React.PropTypes.array
  },

  learningSkillId: 1,
  leisureSkillId: 2,

  render: function () {
    let learningSkill = _.filter(this.props.skills, ['skill_type', this.learningSkillId])
      .map(skill => {
        return (<Skill skill={skill} key={skill.id} />)
      })

    let leisureSkill =  _.filter(this.props.skills, ['skill_type', this.leisureSkillId])
      .map(skill => {
        return (<Skill skill={skill} key={skill.id}/>)
      })
    return (
      <div>
        <HeroPanel />
        <div className='col-md-10 col-md-offset-1'>
          <h1>学习技能</h1>
          <div className='col-md-12'>
            {learningSkill}
          </div>

          <h1>生活技能</h1>
          <div className='col-md-12'>
            {leisureSkill}
          </div>
        </div>
      </div>
    )
  }
})
