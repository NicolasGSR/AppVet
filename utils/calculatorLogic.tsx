export type LifeStage = 'adulto' | 'idoso' | 'filhote';
export type ActivityLevel = 'pouco_ativo' | 'ativo' | 'muito_ativo';

export function calculateFoodAmount(
  pesoAlvo: number,
  lifeStage: LifeStage,
  castrado: boolean,
  activity: ActivityLevel
) {
  let total = 0;

  if (lifeStage === 'filhote') {
    total = (pesoAlvo * 1000) * 0.04;
  } else if (lifeStage === 'idoso') {
    total = (pesoAlvo * 1000) * 0.02;
  } else if (lifeStage === 'adulto') {
    if (castrado) {
      total = (pesoAlvo * 1000) * 0.025;
    } else {
      switch (activity) {
        case 'pouco_ativo':
          total = (pesoAlvo * 1000) * 0.025;
          break;
        case 'ativo':
          total = (pesoAlvo * 1000) * 0.03;
          break;
        case 'muito_ativo':
          total = (pesoAlvo * 1000) * 0.035;
          break;
      }
    }
  }

  return {
    total,
    carcaca: total * 0.5,
    viscera: total * 0.4,
    musculo: total * 0.1,
  };
}