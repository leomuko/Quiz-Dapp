'reach 0.1';

const common = {
  ...hasRandom,
  seeOutCome: Fun([UInt], Null),
}
export const main = Reach.App(() => {
  const Deployer =  Participant('Deployer', {
    ...common,
    wager: UInt,
  });
  const Attacher = Participant('Attacher', {
    ...common,
    acceptWager: Fun([UInt], Bool),
    getResult: Fun([], UInt),
  });

  init();

  Deployer.only(() => {
    const wager = declassify(interact.wager);

  });
  Deployer.publish(wager)
    .pay(wager);
  commit();


Attacher.only(() => {
    const doneAttaching = declassify(interact.acceptWager(wager));
  });
Attacher.publish()
    .pay(wager);

commit();

Attacher.only(() =>{
  const result = declassify(interact.getResult());
})

Attacher.publish(result)


transfer(2 * wager).to(result >= 70 ? Attacher : Deployer)

each([Deployer, Attacher], () =>{
      interact.seeOutCome(result);
});

transfer(balance()).to(Deployer)
  
commit();

exit(); 
})
