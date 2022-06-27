trigger LearningTrigger on Learning__c (before update) {
    for(Learning__c learning: trigger.new){
        
        if(learning.OwnerId != trigger.oldMap.get(learning.id).OwnerId){
             
            learning.name = learning.Owner.name;
        }
    }
}