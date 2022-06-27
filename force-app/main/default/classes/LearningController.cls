
public with sharing class LearningController  {
    
    public LearningController() {

    }

    //comments gets   
    @AuraEnabled(Cacheable=true)
    public static List<learning__c> getLearningswithAccounts(){       
        List<learning__c> lstLearnings=  [SELECT id,name,(SELECT id,name FROM Accounts__r) FROM learning__C ORDER BY Createddate desc];
        return lstLearnings;
    }

    


}