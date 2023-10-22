// There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)


 class Governor {
        static govName = "Frank";
        static stateName = "New York";
        static termLength = 4;
        
    
        static getFullTitle() {
            return `The Governor of ${this.stateName}`;
        }
    
        static announcePolicy(policy) {
            return `The Governor of ${this.stateName} announces a new policy: ${policy}`;
        }
    }
    

    console.log(`Gov name: ${Governor.govName}`);
    console.log(`State Name: ${Governor.stateName}`);
    console.log(`Term Length: ${Governor.termLength} years`);
    
    
    console.log(Governor.getFullTitle()); 
    console.log(Governor.announcePolicy("Lowering state taxes")); 