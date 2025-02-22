  
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

struct element {
	int data;
	struct element *next;
}; /* this data is shared by the thread(s) */
// this should be an array for which we will use linked list

struct element *head;

struct element *temp ;


void *collatz(void *param); /* the thread */

int main(int argc, char *argv[])
{
pthread_t tid; /* the thread identifier */
pthread_attr_t attr; /* set of attributes for the thread */

if (argc != 2) {
        fprintf(stderr,"usage: a.out <integer value>\n");
        /*exit(1);*/
        return -1;
}

if (atoi(argv[1]) < 0) {
        fprintf(stderr,"Argument %d must be non-negative\n",atoi(argv[1]));
        /*exit(1);*/
        return -1;
}

/* get the default attributes */
pthread_attr_init(&attr);

/* create the thread */
pthread_create(&tid,&attr,collatz,argv[1]);

/* now wait for the thread to exit */
pthread_join(tid,NULL);

// need to write a for loop that will iterate thru the list and then print each item 
while (head->next != NULL)
    
{
        printf("%d\n",head->data);

        // free memory after visiting a node
        temp = head;
        head = head->next;
        free(temp);
    }
}

/**
 * The thread will begin control in this function
 */
void *collatz(void *param)
{
	int value;
	 value = atoi(param);

		struct element *node;

		node = (struct element *) malloc(sizeof(struct element));
		head = node;


                while(value != 1) {
			node->data = value;
			node->next = (struct element *) malloc(sizeof(struct element));
			node = node->next;

                        if (value % 2 == 0){
                        value = value / 2;
                        }
                        else {
                        value = 3*value + 1;
                        }
		}


        pthread_exit(0);
}
