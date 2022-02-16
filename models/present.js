module.exports = (sequelize, DataTypes) => {
  const Present = sequelize.define(
    'Present',
    {
      //1. 첫번째 매개변수 ---- Present 테이블로 저장됨
      // 2. 두번째 매개변수 ---- 컬럼지정
      imageUrl: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      // 3. 세번째 매개변수 ---- 모델에 대한 설정들
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', //이모티콘까지 가능
    },
  )
  Present.associate = db => {}
  return Present
}
