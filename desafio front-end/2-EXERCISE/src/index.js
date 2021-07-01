function User(score, hasBoost = true) {
  this.debts = 0
  this.score = score

  var history = []

  this.setScore = function (score) {
    this.score = score
  }

  this.setDebts = function (debts) {
    this.debts = debts
  }

  this.acceptOffer = () => {
    // Pagou sua negociação
    this.debts -= 1
    history.push({
      status: 'accept'
    })
  }

  this.brokenOffer = () => {
    // Quebrou algum acordo por nao ter pago a dívida ou apareceu mais uma negativaçāo no seu CPF
    this.debts += 1
    history.push({
      status: 'broken'
    })
  }

  this.getScore = function () {
    var boost = this.statusBoost()

    var boostMessage = ''
    var boostValue = boost[1] != null ? Math.round(boost[1]) : null

    if (boost[0] == 5) {
      boostMessage = 'Você não possui turbo disponível'
    } else if (boost[0] === 1) {
      boostMessage = 'Você pode aumentar seu Score em até'
    } else if (boost[0] === 2) {
      boostMessage = 'Você perdeu o turbo do seu Score'
    } else if (boost[0] === 3) {
      boostMessage = 'Você pode aumentar seu Score'
    } else if (boost[0] === 4) {
      boostMessage = 'Você ativou o turbo do seu Score'
    }

    return {
      score,
      boost: {
        status: boost[0],
        value: boostValue,
        message: boostMessage,
      },
    }
  }

  this.checkBoost = function () {
    if (!hasBoost) {
      // Verifica se ele possui o Turbo
      return undefined
    }

    var maxBoost = this.calculateBoost(score)
    var available = maxBoost
    var lost = 0
    var pending = 0
    var complete = 0
    var debts = this.debts

    if (history.find(h => h.status === 'broken')) {
      // Caso o consumidor tenha alguma quebra de acordo / alguma divida ele perde o Turbo do Score
      available = null
      lost = maxBoost
    } else if (history.find(h => h.status === 'accept')) {
      var debtsPaid = history.filter(h => h.status === 'accept').length
      if (0 == debts) {
        // Caso o consumidor tenha pago todas suas dividas, ele tem um boost completo e ativo!
        available = 0
        complete = maxBoost
      } else {
        // O consumidor não terminou de pagar suas contas e não quebrou nenhum acordo
        available = maxBoost / (debts + debtsPaid)
        pending = maxBoost - available
      }
    }

    return {
      available,
      lost,
      pending,
      complete,
    }
  }

  this.statusBoost = function () {
    var boost = this.checkBoost()
    /*
    1 = Disponivel
    2 = Perdido
    3 = Pendente
    4 = Completo
    5 = Indisponível
    */
    if (boost == null) {
      return [5, null]
    } else if (boost.lost) {
      return [2, boost.lost]
    } else if (boost.pending) {
      return [3, boost.pending]
    } else if (boost.available) {
      return [1, boost.available]
    } else if (!boost.available && !boost.pending) {
      return [4, boost.complete]
    } else {
      return null
    }
  }

  this.calculateBoost = function (score) {
    /*
    Calcula o boost do usuário com base no score.
    Score menor que 200 e score menor que 500 possuiam o mesmo multiplicador, então era redundante para o cálculo.
    */
    boost = score < 500 ? score * 0.2 : score < 800 ? score * 0.05 : score * 0.03  

    return boost
  }
}


module.exports = User
