
import Loan from "../models/LoanModel.js"
import LoanModel from "../models/LoanModel.js"
import PaymentModel from "../models/PaymentModel.js"


class LoanManager {
    constructor(
        userId,
        loanType,
        amount,
        interestRate,
        numberPayments,
        startDate,
        endDate,
        status
    ) {
        this.userId = userId,
            this.loanType = loanType,
            this.amount = amount,
            this.interestRate = interestRate,
            this.numberPayments = numberPayments,
            this.startDate = startDate,
            this.endDate = endDate,
            this.status = status
    }
async createLoan (){try {
    const loan = await LoanModel.create ({
        userId: this.userId,
        loanType: this.loanType,
        amount: this.amount,
        interestRate: this.interestRate,
        numberPayments: this.numberPayments,
        startDate: this.startDate,
        endDate: this.endDate,
        status: this.status
    })
    return Loan;
} catch (error) {
    throw new Error("ocurrio un error");
    
}
}
async payLoan (userId, loanId, amount, numberPayment){try {
    const payment = await PaymentModel.create({
        userId,
        loanId,
        amount,
        numberPayment
    })
    return payment
} catch (error) {
    throw new Error("Hubo un error en el prestamo");
    
}}
async getLoan(id){try {
    const loan = await LoanModel.findById(id)
    return loan;
} catch (error) {
    throw new Error("error al obtener los prestamos");
    
}}
async getLoans(id){try {
    const loans = await LoanModel.find()
    return loans;
} catch (error) {
    throw new Error("error al obtener los prestamos");
    
}}
async validateUser(){
"El usuario debe tener al menos 3 días en la plataforma Haber hecho 2 transacciones Y mantener un saldo superior a 5000"
}
}
export default LoanManager;
















