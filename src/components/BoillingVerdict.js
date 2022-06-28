export default function BoillingVerdict({celsius = 0}){
    if (celsius >= 100){
        return <p>The Water Would Boli</p>
    }
    return <p>The Water Would not Boli</p>
}