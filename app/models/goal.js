exports.definition = {
	config: {
		columns: {
		    "date": "date",
		    "start": "text",
		    "end": "text"
		},
		//Only use nouns for schema name. Initial problem was 'from' and 'to' would not allow app to function ('error on sql.js line 1' and can't create table)
		//Now we changed 'from' to 'start' and 'to' to 'end'
		adapter: {
			type: "sql",
			collection_name: "goal"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
	deleteAll : function() {
 
		var collection = this;
				 
		var sql = "DELETE FROM " + collection.config.adapter.collection_name;
		db = Ti.Database.open(collection.config.adapter.db_name);
		db.execute(sql);
		db.close();
				 
		collection.trigger('sync');
		console.log
		("model: DELETE FROM " + collection.config.adapter.collection_name);
				 
		}
			
	});

		return Collection;
	}
};