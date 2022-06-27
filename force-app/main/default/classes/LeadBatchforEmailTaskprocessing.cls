public class LeadBatchforEmailTaskprocessing implements Database.Batchable<sObject>,Schedulable {

    public List<Lead> start(Database.BatchableContext BC){
        Datetime todayDate=Datetime.now();
        return [SELECT ID,Name,OwnerId FROM Lead WHERE Status='Emailed' AND Emailed_DateTime__c<=:todayDate.addDays(-2)];
     }

     

    public void execute(Database.BatchableContext BC, 
                       List<Lead> leads){
                        List<Task> taskstoInsert=new List<Task>();
for(Lead lead:leads){
    Task task=new Task();
    task.subject='No Email response after 2 days';
    task.ActivityDate=system.today();
    task.WhoId=lead.id;
    task.OwnerId=lead.OwnerId;
    task.Status='Not Started';
    taskstoInsert.add(task);
}

Insert taskstoInsert;

   }

   public void finish(Database.BatchableContext BC){

}

public void execute(SchedulableContext sc) {
    
}
    
}


